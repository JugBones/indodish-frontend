import Image from 'next/image';
import Remboelan from '../../public/Remboalan.jpg';
import BatikBackground from '../../public/batik-background.webp';
import styles from '@/styles/sections/RestaurantInfo.module.scss';
import { Playfair_Display } from 'next/font/google';

const playfairDisplay = Playfair_Display({
  weight: ['400', '600'],
  subsets: ['latin'],
});

interface RestaurantInfoProps {
  name: string;
  description: string;
  address: string;
}

export default function RestaurantInfo({
  name,
  description,
  address,
}: RestaurantInfoProps) {
  const URL = process.env.NEXT_PUBLIC_API_URL;

  return (
    <section className={`${styles.container} ${playfairDisplay.className}`}>
      <Image
        src={`${URL}/images/restaurant-image?restaurant_name=${name}&size=500`}
        alt=''
        width={500}
        height={500}
        unoptimized
      />
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
        <p>{address}</p>
      </div>
      <Image
        className={styles.batik_background}
        src={BatikBackground}
        alt='Batik Background'
        fill
      />
    </section>
  );
}
