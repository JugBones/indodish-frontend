import React from 'react';
import styles from '../styles/sections/CuisineDesc.module.scss';

interface CuisineDescProps {
  name: string;
  description: string;
  price: string;
}

const CuisineDesc = ({ name, description, price }: CuisineDescProps) => {
  return (
    <div className={styles.cuisineDesc}>
      <img
        src={`${process.env.NEXT_PUBLIC_API_URL}/images/dish-image?dish_name=${name}`}
        alt=''
        className={styles.cuisineDesc__image}
      />
      <div className={styles.cuisineDesc__content}>
        <h2 className={styles.cuisineDesc__title}>{name}</h2>
        <p className={styles.cuisineDesc__description1}>{description}</p>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default CuisineDesc;
