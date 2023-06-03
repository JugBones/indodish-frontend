import { Playfair_Display } from 'next/font/google';
import PopFoodCard from '@/components/PopFoodCard';
import styles from '@/styles/sections/PopularCuisine.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store/store';
import { useEffect } from 'react';
import { getPopularCuisine } from '@/features/cuisineSlice';

const playfairDisplay = Playfair_Display({
  weight: ['400', '600'],
  subsets: ['latin'],
});

export default function PopularCuisine() {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, error, dishes } = useSelector(
    (state: RootState) => state.dish
  );

  useEffect(() => {
    dispatch(getPopularCuisine());
  }, []);

  return (
    <section className={`${styles.container} ${playfairDisplay.className}`}>
      <h2>Popular Cuisine</h2>
      <div className={styles.wrapper}>
        {dishes.length > 0
          ? dishes.map((dish) => (
              <PopFoodCard
                key={dish.id}
                name={dish.name}
                description={dish.description}
                price={dish.price}
                rating_sum={dish.rating_sum}
                number_of_voters={dish.number_of_voters}
              />
            ))
          : 'Nothing'}
      </div>
    </section>
  );
}
