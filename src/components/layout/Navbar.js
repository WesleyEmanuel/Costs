import {Link} from 'react-router-dom'
import Container from './Container'
import styles from './Navbar.module.css'
import logo from '../../img/costs_logo.png'

export default function Navbar(){
    return(
        <nav className={styles.navbar}>
                <Link to='/' className={styles.logo}>
                    COSTS
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}> <Link to='/'>Home</Link> </li>
                    <li className={styles.item}> <Link to='/Projects'>Projetos</Link> </li>
                    <li className={styles.item}> <Link to='/Company'>Empresa</Link> </li>
                    <li className={styles.item}> <Link to='/Contacts'>Contatos</Link> </li>
                </ul>
      </nav>
    )
}   