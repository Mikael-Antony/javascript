import { useLocation } from "react-router-dom"
import Message from "../layout/Message"
import Container from '../layout/container'
import LinkButton from '../layout/LinkButton'

import styles from './Projects.module.css'
import { useEffect, useState } from "react"
import ProjectCard from "../project/ProjectCard"

function Projects() {

    const [Projects, SetProjects] = useState([])

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
            })
            .catch((err) => console.log(err))
    }, [])
    
    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus Projetos</h1>
                <LinkButton to='/newproject' text='Criar projeto' />
            </div>
            {message && <Message type='success' msg={message} />}
            <Container customClass='start'>
                {Projects.length > 0 && 
                    Projects.map((project) => (
                        <ProjectCard 
                        id={project.id}
                        name={project.name} 
                        budget={project.budget}
                        category={project.category.name}
                        key={project.id}
                        />
                    ))}
            </Container>
        </div>
    )
}

export default Projects