import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/Button';
import { Playfair_Display } from 'next/font/google';
import HeroImage from '../../public/hero-image.webp';
import styles from '@/styles/sections/Hero.module.scss';

const playfairDisplay = Playfair_Display({
  weight: ['400', '800'],
  subsets: ['latin'],
});

export default function Hero() {
  return (
    <section className={`${styles.container} ${playfairDisplay.className}`}>
      <div>
        <h2>
          Indulge in the diverse and flavorful Indonesian cuisine by trying our
          recommended dishes
        </h2>
        <Button
          styling={{
            cursor: 'pointer',
            backgroundColor: '#41280e',
            color: '#ffffff',
            fontSize: '1.75rem',
            fontWeight: 700,
            width: 'fit-content',
            padding: '1rem 1.25rem',
            borderRadius: '5px',
          }}
          hoverStying={{ backgroundColor: '#e37300' }}
        >
          <Link href='/search'>Explore Cuisine</Link>
        </Button>
      </div>
      <Image src={HeroImage} alt='Nasi' width='650' height='650' unoptimized />
    </section>
  );
}
