import Image from 'next/image';
import Link from 'next/link';
import { Playfair_Display } from 'next/font/google';
import indodishLogo from '../../public/indodish-logo.webp';
import styles from '@/styles/components/IndODishLogo.module.scss';

const playfairDisplay = Playfair_Display({ weight: '700', subsets: ['latin'] });

interface IndODishLogoProps {
  color: string;
}

export default function IndODishLogo({ color }: IndODishLogoProps) {
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
        <span className={playfairDisplay.className} style={{ color }}>
          IndODish
        </span>
      </Link>
    </h1>
  );
}
