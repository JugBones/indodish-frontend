import Image from 'next/image';
import Remboelan from '../../public/Remboalan.jpg';
import BatikBackground from '../../public/batik-background.webp';
import styles from '@/styles/sections/RestaurantInfo.module.scss';
import { Playfair_Display } from 'next/font/google';

const playfairDisplay = Playfair_Display({
  weight: ['400', '600'],
  subsets: ['latin'],
});

export default function RestaurantInfo() {
  return (
    <section className={`${styles.container} ${playfairDisplay.className}`}>
      <Image src={Remboelan} alt='' width={500} height={500} />
      <div>
        <h3>Restaurant Name</h3>
        <p>Description</p>
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
