import styles from "./Footer.module.scss"
import facebookIcon from "./icons/facebook.svg"
import twitterIcon from "./icons/twitter.svg"
import instagramIcon from "./icons/instagram.svg"

export default function Footer() {
    return(
        <footer className={styles.footer}>
            <ul className={styles.footer__list}>
                <li>
                    <a href="/">
                        <img src={facebookIcon} alt="ícone do facebook" />
                    </a>
                </li>
                <li>
                    <a href="/">
                        <img src={twitterIcon} alt="ícone do twitter" />
                    </a>
                </li>
                <li>
                    <a href="/">
                        <img src={instagramIcon} alt="ícone do instagram" />
                    </a>
                </li>
            </ul>

            <p>Desenvolvido por João Pedro Alves.</p>
        </footer>
    )
}

