import Image from 'next/image';
import { Button } from '@chakra-ui/react';
import styles from '@/styles/components/CartItemCard.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store/store';
import {
  deleteCartItems,
  getCartItems,
  updateCartItems,
} from '@/features/cartSlice';

interface CardItemCardProps {
  id: string;
  dishName: string;
  price: string;
  quantity: number;
}

export default function CardItemCard({
  id,
  dishName,
  price,
  quantity,
}: CardItemCardProps) {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className={styles.container}>
      <h3>{dishName}</h3>
      <p>{`Rp. ${parseFloat(price.slice(1)) * 1000 * quantity}`}</p>
      <div>
        <Button
          colorScheme='orange'
          onClick={() => {
            if (quantity - 1 == 0) {
              dispatch(deleteCartItems(id)).finally(() => {
                dispatch(getCartItems());
              });
            } else {
              dispatch(
                updateCartItems({
                  cart_item_id: id,
                  quantity: quantity - 1,
                })
              ).finally(() => {
                dispatch(getCartItems());
              });
            }
          }}
        >
          {'<'}
        </Button>
        <p>{quantity}</p>
        <Button
          colorScheme='orange'
          onClick={() => {
            dispatch(
              updateCartItems({
                cart_item_id: id,
                quantity: quantity + 1,
              })
            ).finally(() => {
              dispatch(getCartItems());
            });
          }}
        >
          {'>'}
        </Button>
      </div>
      <Button
        colorScheme='orange'
        onClick={() => {
          dispatch(deleteCartItems(id)).finally(() => {
            dispatch(getCartItems());
          });
        }}
      >
        delete
      </Button>
    </div>
  );
}
