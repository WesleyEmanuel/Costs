import { useLocation } from "react-router-dom"
import Message from "../layout/Message"
import styles from './Projects.module.css'
import Container from '../layout/Container'
import LinkButton from '../layout/LinkButton'
import ProjectCard from "../project/ProjectCard"
import { useState, useEffect } from "react"
import Loading from "../layout/Loading"

export default function Projects(){

    const [projects, setProjects] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)
    const [messageDelete, setMessageDelete] = useState('')

    const location = useLocation()
    let message = ''
    if(location.state){
        message = location.state.message
    }

    useEffect( () => {
        setTimeout( () => {
        fetch('http://localhost:5000/projects', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then((resp) => resp.json())
        .then((data) => {
            setProjects(data)
            setRemoveLoading(true)
        })
        .catch(err => console.log(err))
        }, 300)
    }, [])

    function removeProject(id){
        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((resp) => resp.json())
        .then(() => {
            setProjects(projects.filter( (project) => project.id != id))
            //message
            setMessageDelete('Projeto excluído com sucesso!')
        })
        .catch((err) => console.log(err))
    }

    return(
        <div className={styles.projectContainer}>
            {message && <Message type='sucess' msg={message} />}
            {messageDelete && <Message type='sucess' msg={messageDelete} />}
            <div className={styles.tittleContainer}>
                <h1>Meus Projetos</h1>
                <LinkButton to='/newproject' text='Criar Projeto'/>
            </div>
            <Container customClass='start'>
                {projects.length > 0 && 
                    projects.map( (project) => 
                        <ProjectCard 
                            key={project.id} 
                            name={project.name}
                            id={project.id}
                            budget={project.budget}
                            category={project.category.name}
                            handleRemove={removeProject}
                        /> 
                    )
                }
                {!removeLoading && <Loading/>}
                {removeLoading && projects.length === 0 &&(
                    <h3 className={styles.noProjects}>Não há projetos cadastrados...</h3>
                )}
            </Container>
        </div>
    )
}