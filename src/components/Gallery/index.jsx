import Tags from "../Tags";
import styles from "./Gallery.module.scss";
import Cards from "./Cards";
import photos from './photos.json'
import { useState } from "react";

export default function Gallery() {
    const [itens, setItens] = useState(photos);
    const tags = [...new Set(photos.map((value) => value.tag))]

    const photosFilter = (tag) => {
        const newPhotos = photos.filter((photo) => {
            return photo.tag === tag
        })

        setItens(newPhotos)
    }

    return (
        <section className={styles.gallery}>
            <h2>Navegue pela Galeria</h2>
            <Tags tags={tags} photosFilter={photosFilter} setItens={setItens} />
            <Cards itens={itens} styles={styles} />
        </section>
    )
}
