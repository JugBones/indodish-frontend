import { getRestaurant } from '@/features/restaurantSlice';
import Footer from '@/sections/Footer';
import Header from '@/sections/Header';
import RestaurantInfo from '@/sections/RestaurantInfo';
import RestaurantMenu from '@/sections/RestaurantMenu';
import { AppDispatch, RootState } from '@/store/store';
import { Spinner } from '@chakra-ui/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

interface Restaurant {
  name: string;
  description: string;
  address: string;
  menu: Menu[];
}

interface Menu {
  name: string;
  description: string;
  price: number;
  category: string;
}

export default function RestaurantPage(props: Restaurant) {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, error, restaurant } = useSelector(
    (state: RootState) => state.restaurants
  );

  useEffect(() => {
    if (!router.isReady) {
      return;
    }
    dispatch(getRestaurant(router.query.restaurant_name as string));
  }, [router.isReady]);

  return (
    <>
      <Head>
        <title>IndODish - Home</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      {isLoading && error == null ? (
        <Spinner />
      ) : (
        <>
          <RestaurantInfo
            name={restaurant.name}
            description={restaurant.description}
            address={restaurant.address}
          />
          <RestaurantMenu menu={restaurant.menu} />
        </>
      )}
      <Footer />
    </>
  );
}
