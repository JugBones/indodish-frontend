import { getRegionCuisine } from '@/features/cuisineSlice';
import Footer from '@/sections/Footer';
import Header from '@/sections/Header';
import RegionCuisine from '@/sections/RegionCuisine';
import { AppDispatch, RootState } from '@/store/store';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Region() {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, error, regionDish } = useSelector(
    (state: RootState) => state.dish
  );
  const router = useRouter();
  useEffect(() => {
    if (!router.isReady) {
      return;
    }
    dispatch(getRegionCuisine(router.query.region_name as string));
  }, [router.isReady]);
  return (
    <>
      <Head>
        <title>IndODish - Region</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <RegionCuisine reg_cuisines={regionDish} />
      <Footer />
    </>
  );
}
