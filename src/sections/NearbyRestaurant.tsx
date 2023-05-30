import FoodCard from '@/components/FoodCard';
import { getNearbyRestaurant } from '@/features/restaurantSlice';
import { AppDispatch, RootState } from '@/store/store';
import styles from '@/styles/sections/NearbyRestaurant.module.scss';
import { Playfair_Display } from 'next/font/google';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const playfairDisplay = Playfair_Display({
  weight: ['400', '600'],
  subsets: ['latin'],
});

export default function NearbyRestaurant() {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, error, restaurants } = useSelector(
    (state: RootState) => state.restaurants
  );

  useEffect(() => {
    console.log(restaurants);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        dispatch(
          getNearbyRestaurant({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          })
        );
      });
      dispatch(getNearbyRestaurant());
    }
  }, []);

  return (
    <section className={`${styles.container} ${playfairDisplay.className}`}>
      <h2>Nearby Restaurant</h2>
      <div>
        {restaurants.length > 0 ? (
          restaurants.map((restaurant) => (
            <FoodCard
              key={restaurant.id}
              restaurantName={restaurant.name}
              rating_sum={restaurant.rating_sum}
              number_of_voters={restaurant.number_of_voters}
            />
          ))
        ) : (
          <p>No Result</p>
        )}
      </div>
    </section>
  );
}
