import styles from '@/styles/components/MenuItem.module.scss';
import Rating from './Rating';
import { Button, Spinner } from '@chakra-ui/react';
import { AppDispatch, RootState } from '@/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { addCartItems } from '@/features/cartSlice';

interface MenuItemProps {
  id: string;
  name: string;
  description: string;
  price: number;
  rating_sum: number;
  number_of_voters: number;
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
      {/* <Image src={`${process.env.NEXT_PUBLIC_API_URL}/images/dish-image`} /> */}
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{price}</p>
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
