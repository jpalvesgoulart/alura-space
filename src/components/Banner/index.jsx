import styles from "./Banner.module.scss";
import banner from  "./banner.png";

export default function Banner() {
    return (
        <div className={styles.banner}>
            <h1>A Galeria Mais Completa do Espaço</h1>
            <img src={banner} alt="A Imagem da Terra Vista do Espaço" />
        </div>
    )
}
