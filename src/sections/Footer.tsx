import Link from 'next/link';
import Image from 'next/image';
import { Playfair_Display } from 'next/font/google';
import indodishLogo from '../../public/indodish-logo.webp';
import batikBackground from '../../public/batik-background.webp';
import styles from '@/styles/sections/Footer.module.scss';

const playfairDisplay = Playfair_Display({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
});

export default function Footer() {
  return (
    <footer className={`${styles.container} ${playfairDisplay.className}`}>
      <div className={styles.section}>
        <h2 className={styles.logo_container}>
          <Link href='/'>
            <Image
              src={indodishLogo}
              alt='IndODish Logo'
              width={66}
              height={66}
              unoptimized
            />
            <span className={playfairDisplay.className}>IndODish</span>
          </Link>
        </h2>
        <div>
          <span>Email:</span>
          <Link href='mailto:info@indodish.com'>info@indodish.com</Link>
        </div>
        <div>
          <span>WhatsApp:</span>
          <Link href=''>+(62)-8XX-XXXX-XXXX</Link>
        </div>
        <div>
          <address>
            <span>Address:</span>
            Jl. Jend. Sudirman, RT.1/RW.3, Gelora, Kecamatan Tanah Abang, Kota
            Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10270.
          </address>
        </div>
      </div>
      <nav className={styles.information_section}>
        <h3>Information</h3>
        <ul>
          <li className={styles.navigation_link_items}>
            <Link href='/about'>About us</Link>
          </li>
          <li className={styles.navigation_link_items}>
            <Link href='/blog'>Blog</Link>
          </li>
          <li className={styles.navigation_link_items}>
            <Link href='/contact-us'>Contact us</Link>
          </li>
        </ul>
      </nav>
      <nav className={styles.explore_cuisine_section}>
        <h3>Explore Cuisine</h3>
        <ul>
          <li className={styles.navigation_link_items}>
            <Link href='/about'>About us</Link>
          </li>
          <li className={styles.navigation_link_items}>
            <Link href='/blog'>Blog</Link>
          </li>
          <li className={styles.navigation_link_items}>
            <Link href='/contact-us'>Contact us</Link>
          </li>
        </ul>
      </nav>
      <nav className={styles.explore_region_section}>
        <h3>Explore Region</h3>
        <ul>
          <li className={styles.navigation_link_items}>
            <Link href='/about'>About us</Link>
          </li>
          <li className={styles.navigation_link_items}>
            <Link href='/blog'>Blog</Link>
          </li>
          <li className={styles.navigation_link_items}>
            <Link href='/contact-us'>Contact us</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.follow_us_section}>
        <span>Follow us:</span>
        <Link href='https://instagram.com' target='_blank'>
          <i className='bi bi-instagram' />
        </Link>
        <Link href='https://facebook.com' target='_blank'>
          <i className='bi bi-facebook' />
        </Link>
        <Link href='https://whatsapp.com' target='_blank'>
          <i className='bi bi-whatsapp' />
        </Link>
      </div>
      <Image
        className={styles.batik_background}
        src={batikBackground}
        alt='Batik Background'
        fill
      />
    </footer>
  );
}
