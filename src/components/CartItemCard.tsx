import Image from 'next/image';
import { Button } from 'react-bootstrap';
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
  price: number;
  quantity: number;
}

export default function CardItemCard({
  id,
  dishName,
  price,
  quantity,
}: CardItemCardProps) {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, error, cart } = useSelector(
    (state: RootState) => state.cart
  );
  return (
    <div className={styles.container}>
      <h3>{dishName}</h3>
      <p>{`Rp. ${parseFloat(price.slice(1)) * 1000}`}</p>
      <Button
        onClick={() => {
          if (quantity - 1 == 0) {
            dispatch(deleteCartItems(id));
          } else {
            dispatch(
              updateCartItems({
                cart_item_id: id,
                quantity: quantity - 1,
              })
            );
            dispatch(getCartItems());
          }
        }}
      >
        {'<'}
      </Button>
      <p>{quantity}</p>
      <Button
        onClick={() => {
          dispatch(
            updateCartItems({
              cart_item_id: id,
              quantity: quantity + 1,
            })
          );
        }}
      >
        {'>'}
      </Button>
      <Button
        onClick={() => {
          dispatch(() => {
            deleteCartItems(id);
          });
        }}
      >
        delete
      </Button>
    </div>
  );
}
