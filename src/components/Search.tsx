import { useState, useEffect } from 'react';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import styles from '@/styles/components/Search.module.scss';
import Link from 'next/link';
import { AppDispatch, RootState } from '@/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { searchCuisine } from '@/features/cuisineSlice';
import { searchRestaurants } from '@/features/restaurantSlice';

export default function Search() {
  const [search, setSearch] = useState<string>('');
  const dispatch = useDispatch<AppDispatch>();
  const { searchRestaurantResults } = useSelector(
    (state: RootState) => state.restaurants
  );
  const { searchDish } = useSelector((state: RootState) => state.dish);

  useEffect(() => {
    dispatch(searchCuisine(search));
    dispatch(searchRestaurants(search));
  }, [search]);

  return (
    <div className={styles.container}>
      <InputGroup>
        <InputLeftElement>
          <i className='bi bi-search' />
        </InputLeftElement>
        <Input
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          backgroundColor='bisque'
          variant='filled'
          placeholder='Search...'
          _focus={{
            backgroundColor: 'bisque',
            borderColor: '#41280e',
          }}
          _hover={{
            backgroundColor: 'bisque',
          }}
        />
      </InputGroup>
      <div
        style={{
          display: search.length > 0 ? 'block' : 'none',
        }}
        className={styles.search_suggestions}
      >
        {searchDish.length > 0 &&
          searchDish.map((dish) => (
            <Link
              key={dish.id}
              href={`/cuisine/${encodeURIComponent(dish.name)}`}
              className={styles.link}
            >
              {dish.name}
            </Link>
          ))}
        {searchRestaurantResults.length > 0 &&
          searchRestaurantResults.map((restaurant) => (
            <Link
              key={restaurant.id}
              href={`/restaurant/${encodeURIComponent(restaurant.name)}`}
              className={styles.link}
            >
              {restaurant.name}
            </Link>
          ))}
      </div>
    </div>
  );
}
