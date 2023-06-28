import React from 'react';
import Constructor from './Constructor';

export default function Cards( {itens, styles} ) {
  return (
    <ul className={styles.gallery__cards}>
        {itens.map((item) => {
            return(
                <Constructor key={item.id} item={item} styles={styles} />
            );
        })}
    </ul>
  )
}
