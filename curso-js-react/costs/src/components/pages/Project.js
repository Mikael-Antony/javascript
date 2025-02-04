import { parse, v4 as uuidv4 } from 'uuid'

import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import styles from './Project.module.css'
import Loading from '../layout/Loading'
import Container from '../layout/container'
import ProjectForm from '../project/ProjectForm'
import Message from '../layout/Message'
import ServiceForm from '../service/ServiceForm'
import ServiceCard from '../service/ServiceCard'

function Project() {

    const { id } = useParams(0)

    const [project, setproject] = useState([])
    const [services, setServices] = useState([])
    const [ShowProjectForm, setShowProjectForm] = useState(false)
    const [ShowServiceForm, setShowServiceForm] = useState(false)
    const [message, setmessage] = useState()
    const [type, settype] = useState()


    useEffect(() => {

        fetch( `http://localhost:5000/projects/${id}`, {
            method: 'GET',
            header: { 'Content-Type': 'application/json', },
        }).then((resp) => resp.json())
        .then((data) => {
            setproject(data)
            setServices(data.services)
        })
        .catch((err) => console.log(err))
    }, [id])

    function editpost(project) {
        setmessage('')
        //budget validation 
        if(project.budget < project.cost) {
            //messager
            setmessage('O orçamento não pode ser maior que o custo do projeto!')
            settype('error')
            return false
        }

        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(project),
        })
        .then(resp => resp.json())
        .then((data) => {
            setproject(data)
            setShowProjectForm(false)
            //message
            setmessage("Projeto atualizado!")
            settype('success')
        })
        .catch(err => console.log(err))
    }

    function createService(project) {
        setmessage('')

        //last service
        const lastService = project.services[project.services.length - 1]

        lastService.id = uuidv4()

        const lastServiceCost = lastService.cost

        const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost)

        //maximum value validation
        if(newCost > parseFloat(project.budget)) {
            setmessage('Orçamento ultrapassado, verifique o valor do serviço')
            settype('error')

            project.services.pop()
            return false
        }

        //add service cost to project total cont
        project.cost = newCost

        // update project
        fetch(`http://localhost:5000/projects/${project.id}`, { 
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(project)
        }).then((resp) => resp.json())
        .then((data) => {
            //exibir o serviço

            setShowServiceForm(false)
        })
        .catch((err) => console.log(err)) 
    }


    function removeService(id, cost) {
        const serviceUpdated = project.services.filter(
            (service) => service.id !== id
        )

        const projectUpdated = project

        projectUpdated.services = serviceUpdated
        projectUpdated.cost = parseFloat(projectUpdated.cost) - parseFloat(cost)

        fetch(`http://localhost:5000/projects/${projectUpdated.id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(projectUpdated)
        }).then((resp) => resp.json())
        .then((data) => {
            setproject(projectUpdated)
            setServices(serviceUpdated)
            setmessage('Serviço removido com sucesso!')
        })
        .catch((err) => console.log(err))
    }
    
    function ToggleProjectForm() {
        setShowProjectForm(!ShowProjectForm)
    }
    function ToggleServiceForm() {
        setShowServiceForm(!ShowServiceForm)
    }

    return (<>
        {project.name ? (
            <div className={styles.project_details}>
                <Container customClass='column'>
                    {message && <Message type={type} msg={message}/>}
                    <div className={styles.details_container}>
                        <h1>Projeto: {project.name}</h1>
                        <div className={styles.btncon}>
                            <button className={styles.btn} onClick={ToggleProjectForm}>{!ShowProjectForm ? 'Editar projeto' : 'Fechar'}</button>
                        </div>
                        {!ShowProjectForm ? (
                            <div className={styles.cont_p}>
                                <p>
                                    <span>Categoria: </span> {project.category.name}
                                </p>
                                <p>
                                    <span>Total de Orçamento: </span> R${project.budget}
                                </p><p>
                                    <span>Total Utilizado: </span> R${project.cost}
                                </p>
                            </div>
                        ) : (
                            <div className={styles.cont_d_p}>
                                <ProjectForm handleSubmit={editpost} btnText='Concluir edição' projectData={project} />
                            </div>
                        )}
                    </div>
                    <div className={styles.service_form_container}>
                        <h2>Adicione um serviço: </h2>
                        <button className={styles.btn} onClick={ToggleServiceForm}>{!ShowServiceForm ? 'Adicionar serviço' : 'Fechar'}</button>
                        <div className={styles.cont_d_p}>
                            {ShowServiceForm && (
                                <ServiceForm 
                                    handleSubmit={createService}
                                    btnText='Adicionar serviço'
                                    projectData={project}
                                />
                            )}
                        </div>
                    </div>
                    <h2>Serviços</h2>
                    <Container customClass='start'>
                        {services.length > 0 && 
                            services.map((service) => (
                                <ServiceCard
                                    id={service.id}
                                    name={service.name}
                                    cost={service.cost}
                                    description={service.Description}
                                    key={service.id}
                                    handleRemove={removeService}
                                />
                            ))
                        }
                        {services.length === 0 && <p>Não há serviços cadastrados</p>}
                    </Container>
                </Container>
            </div>
        ): ( <Loading/> )}
    </>)
}

export default Project