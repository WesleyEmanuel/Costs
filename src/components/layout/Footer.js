import {FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa'
import styles from './Footer.module.css'

export default function Footer() {
    return(
        <footer>
            <ul className={styles.socialMedias}>
                <a href='https://github.com/WesleyEmanuel'target='_blank' rel="noreferrer">
                    <li> <FaGithub/> </li>
                </a>

                <a href='https://www.linkedin.com/in/wesley-alves-7b05781b9/'target='_blank' rel="noreferrer">
                    <li> <FaLinkedin/> </li>
                </a>

                <a href='https://www.instagram.com/oalveswesley/'target='_blank' rel="noreferrer">
                    <li> <FaInstagram/> </li>
                </a>
            </ul>
            <p><span>Costs</span> &copy; 2022</p>
        </footer>
    )
}