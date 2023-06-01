import React from 'react';
import styles from '../styles/sections/CuisineDesc.module.scss';

const CuisineDesc = () => {
  return (
    <div className={styles.cuisineDesc}>
      <img
        src="/ImgItem/martabak.jpeg"
        alt=""
        className={styles.cuisineDesc__image}
      />
      <div className={styles.cuisineDesc__content}>
        <h2 className={styles.cuisineDesc__title}>Martabak</h2>
        <p className={styles.cuisineDesc__description1}>
        Martabak merupakan panganan yang dijajakan biasanya pada malam hari, dan biasanya ada dua jenis yaitu martabak manis dan martabak asin 
        atau martabak telur. Ragam topping yang melimpah, serta aroma adonan yang dipanggang semakin menggoda, membuat martabak manis jadi kudapan favorit tak sedikit orang. 
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
        like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <p className={styles.cuisineDesc__description2}>
        Fun Fact : Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
      </div>
    </div>
  );
};

export default CuisineDesc;
