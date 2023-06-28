import styles from './Menu.module.scss'
import home from './icons/home.png'
import mostLiked from './icons/mostLiked.png'
import mostSeen from './icons/mostSeen.png'
import news from './icons/news.png'
import surpriseMe from './icons/surpriseMe.png'


export default function Menu() {
    return (
        <nav className={styles.menu}>
            <ul className={styles.menu__list}>
                <li className={styles.menu__item}>
                    <img src={home} alt='ícone do início'/>
                    <a href='/'>Início</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={mostLiked} alt='ícone de mais vistas'/>
                    <a href='/'>Mais Curtidas</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={mostSeen} alt='ícone de mais curtidas'/>
                    <a href='/'>Mais Vistas</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={news} alt='ícone de novas'/>
                    <a href='/'>Novas</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={surpriseMe} alt='ícone de surpreenda-me'/>
                    <a href='/'>Surpreenda-me</a>
                </li>
            </ul>
        </nav>
    )
}