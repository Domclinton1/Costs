import {FaFacebook, FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer(){
    return(
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li><FaFacebook/></li>
                <li><FaInstagram/></li>
                <li><FaLinkedin/></li>
                <li><FaGithub/></li>
            </ul>
            <p className={styles.copy_right}><span>Costs</span> &copy; Dom Clinton Corleone - 2024</p>
        </footer>
    )
}
export default Footer