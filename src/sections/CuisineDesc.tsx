import React from 'react';
import styles from '../styles/sections/CuisineDesc.module.scss';
import { Button } from '@chakra-ui/react';
import { AppDispatch } from '@/store/store';
import { useDispatch } from 'react-redux';
import { addCartItems } from '@/features/cartSlice';
interface CuisineDescProps {
  id: string;
  name: string;
  description: string;
  price: string;
}

const CuisineDesc = ({ id, name, description, price }: CuisineDescProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleAddToCart = () => {
    dispatch(
      addCartItems({
        dish_id: id,
        quantity: 1,
      })
    );
  };
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
        <p>{`Rp. ${parseFloat(price?.slice(1)) * 1000}`}</p>
        <Button
          marginBlock={'1rem'}
          colorScheme='orange'
          onClick={handleAddToCart}
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default CuisineDesc;
