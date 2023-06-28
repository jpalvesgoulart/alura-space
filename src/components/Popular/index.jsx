import React from 'react'
import styles from './Popular.module.scss'
import popularPhotos from './popular-photos.json'
import Button from 'components/Button'

export default function Popular() {
  return (
    <aside className={styles.popular}>
      <h2>Populares</h2>
      <ul className={styles.popular__images}>
        {popularPhotos.map((popularPhoto) => {
          return (
            <li key={popularPhoto.id}>
              <img src={popularPhoto.path} alt={popularPhoto.alt} />
            </li>
          )
        })}
      </ul>
      <Button> Ver mais </Button>
    </aside>
  )
}
