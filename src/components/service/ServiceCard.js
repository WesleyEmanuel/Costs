import styles from '../project/ProjectCard.module.css'
import { BsFillTrashFill} from 'react-icons/bs'

export default function ServiceCard({id, name, cost, description, handleRemove}){

    function remove(e){
        e.preventDefault()
        handleRemove(id, cost)
    }

    return(
        <div className={styles.projectCard}>
            <h4>{name}</h4>
            <p> <span>Descrição:</span> {description}</p>
            <p> <span>Valor:</span> R$ {cost}</p>
            <div className={styles.projectCardActions}>
                <button onClick={remove}>
                    <BsFillTrashFill/> Excluir
                </button>
            </div>
        </div>
    )
}