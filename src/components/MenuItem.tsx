import styles from '@/styles/components/MenuItem.module.scss';
import Rating from './Rating';
import { Button, Divider, Spinner } from '@chakra-ui/react';
import { AppDispatch, RootState } from '@/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { addCartItems } from '@/features/cartSlice';

interface MenuItemProps {
  id: string;
  name: string;
  description: string;
  price: string;
}

export default function MenuItem({
  id,
  name,
  description,
  price,
}: MenuItemProps) {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading } = useSelector((state: RootState) => state.cart);
  return (
    <div className={styles.container}>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{`Rp. ${parseFloat(price?.slice(1)) * 1000}`}</p>
      <Button
        colorScheme='orange'
        onClick={() => {
          dispatch(
            addCartItems({
              dish_id: id,
              quantity: 1,
            })
          );
        }}
      >
        {isLoading ? <Spinner /> : 'Add to Cart'}
      </Button>
    </div>
  );
}
