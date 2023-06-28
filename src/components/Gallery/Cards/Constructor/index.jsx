import React from 'react'

import open from './open.png'
import favorite from './favorito.png'

export default function Constructor( {styles, item} ) {
  return (
    <li className={styles.gallery__card}>
        <img className={styles.gallery__image} src={item.image} alt={item.title} />
        <p className={styles.gallery__description}>{item.title}</p>
        <div>
            <p>{item.credits}</p>
            <span>
                <img src={favorite} alt="Ícone de coração" />
                <img src={open} alt="Ícone de modal" />
            </span>
        </div>
    </li>
  )
}
