import { useLocation } from "react-router-dom"
import Message from "../layout/Message"
import Loading from "../layout/Loading"
import Container from '../layout/container'
import LinkButton from '../layout/LinkButton'

import styles from './Projects.module.css'
import { useEffect, useState } from "react"
import ProjectCard from "../project/ProjectCard"

function Projects() {

    const [Projects, SetProjects] = useState([])
    const [RemoveLoading, setRemoveLoading] = useState(true)
    const [ProjectMessage, setProjectMessage] = useState('')

    const location = useLocation()
    let  message = ''

    if (location.state) {
        message = location.state.message
    }

    useEffect(() => {
        fetch('http://localhost:5000/projects', {
            method: 'GET',
            headers: {
                'content-type': 'aplication/json',
            },
        }).then(resp => resp.json())
            .then(data => {
                console.log(data)
                SetProjects(data)
                setRemoveLoading(false)
            })
            .catch((err) => console.log(err))
    }, [])

    function RemoveProject(id) {

        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'aplication/json',
            },
        }).then(resp => resp.json())
        .then(() => {
            SetProjects(Projects.filter((project) => project.id !== id))
            setProjectMessage('Projeto excluido com sucesso!')
        })
        .catch(err => console.log(err))
    }
    
    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus Projetos</h1>
                <LinkButton to='/newproject' text='Criar projeto' />
            </div>
            {message && <Message type='success' msg={message} />}
            {ProjectMessage && <Message type='success' msg={ProjectMessage} />}
            <Container customClass='start'>
                {Projects.length > 0 && 
                    Projects.map((project) => (
                        <ProjectCard 
                        id={project.id}
                        name={project.name} 
                        budget={project.budget}
                        category={project.category.name}
                        key={project.id}
                        handleRemove={RemoveProject}
                        />
                    ))}
                    {RemoveLoading && <Loading />}
                    {!RemoveLoading && Projects.length === 0 && (
                        <p>Não há projetos cadrastados</p>
                    )}
            </Container>
        </div>
    )
}

export default Projects