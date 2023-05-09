import Image from 'next/image';
import Link from 'next/link';
import { Playfair_Display } from 'next/font/google';
import indodishLogo from '../../public/indodish-logo.webp';
import styles from '@/styles/components/IndODishLogo.module.scss';

const playfairDisplay = Playfair_Display({ weight: '700', subsets: ['latin'] });

export default function IndODishLogo() {
  return (
    <h1 className={styles.container}>
      <Link href='/'>
        <Image
          src={indodishLogo}
          alt='IndODish Logo'
          width={77}
          height={77}
          unoptimized
        />
        <span className={playfairDisplay.className}>IndODish</span>
      </Link>
    </h1>
  );
}
