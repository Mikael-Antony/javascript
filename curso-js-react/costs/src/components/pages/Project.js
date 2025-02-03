import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import styles from './Project.module.css'
import Loading from '../layout/Loading'
import Container from '../layout/container'
import ProjectForm from '../project/ProjectForm'
import Message from '../layout/Message'

function Project() {

    const { id } = useParams()

    const [project, setproject] = useState([])
    const [ShowProjectForm, setShowProjectForm] = useState(false)
    const [message, setmessage] = useState()
    const [type, settype] = useState()

    useEffect(() => {

        fetch( `http://localhost:5000/projects/${ id }`, {
            method: 'GET',
            header: { 'Content-Type': 'application/json', },
        }).then((resp) => resp.json())
        .then((data) => {
            setproject(data)
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
    
    function ToggleProjectForm() {
        setShowProjectForm(!ShowProjectForm)
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
                </Container>
            </div>
        ): ( <Loading/> )}
    </>)
}

export default Project