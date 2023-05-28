import Footer from '@/sections/Footer';
import Header from '@/sections/Header';
import SearchRegion from '@/sections/SearchRegion';
import PopularCuisine from '@/sections/PopularCuisine';
import NearbyRestaurant from '@/sections/NearbyRestaurant';
import Head from 'next/head';

export default function Search() {
  return (
    <>
      <Head>
        <title>IndODish - Search</title>
      </Head>
      <Header />
      <SearchRegion />
      <PopularCuisine />
      <NearbyRestaurant />
      <Footer />
    </>
  );
}
