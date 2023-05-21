import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/Button';
import { Playfair_Display } from 'next/font/google';
import IndonesiaMap from '../../public/region-image.webp';
import BatikBackground from '../../public/batik-background.webp';
import styles from '@/styles/sections/BrowseLocation.module.scss';

const playfairDisplay = Playfair_Display({
  weight: ['400', '600'],
  subsets: ['latin'],
});

export default function BrowseLocation() {
  return (
    <section className={`${styles.container} ${playfairDisplay.className}`}>
      <div>
        <h2>Browse through locations</h2>
        <p>
          Find your favorite Indonesian dishes by location. Explore the
          country's cuisine one province at a time
        </p>
        <Button
          styling={{
            cursor: 'pointer',
            display: 'inline',
            fontSize: '1.75rem',
            padding: '1rem 1.25rem',
            borderRadius: '5px',
            backgroundColor: '#e37300',
            zIndex: 1,
          }}
          hoverStying={{ backgroundColor: '#b85c00' }}
        >
          <Link href='/search'>Explore Region</Link>
        </Button>
      </div>
      <Image
        src={IndonesiaMap}
        alt='Map of Indonesia'
        width='635'
        height='236'
        unoptimized
      />
      <Image
        src={BatikBackground}
        alt='Batik Background'
        fill
        className={styles.batik_background}
        unoptimized
      />
    </section>
  );
}
