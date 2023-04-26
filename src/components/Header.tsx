import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';
import { Playfair_Display } from 'next/font/google';
import styles from '@/styles/components/Header.module.scss';

const playfairDisplay = Playfair_Display({
  subsets: ['latin', 'latin-ext'],
  weight: ['600', '700'],
});

export default function Header() {
  return (
    <header className={`${styles.container} ${playfairDisplay.className}`}>
      <h1 id={styles.indodish_logo}>
        <Link href='/'>
          <span id={styles.indodish_img}>
            <Image src='/indodish-logo.png' alt='IndODish Logo' fill />
          </span>
          <span>IndODish</span>
        </Link>
      </h1>
      <nav className={styles.navigation}>
        <ul className={styles.navigation_list}>
          <li className={styles.navigation_list_items}>
            <Link href='/about-us'>About us</Link>
          </li>
          <li className={styles.navigation_list_items}>
            <Link href='/blog'>Blog</Link>
          </li>
          <li className={styles.navigation_list_items}>
            <Link href='/contact-us'>Contact us</Link>
          </li>
        </ul>
      </nav>
      <section className={styles.side_section}>
        <div className={styles.side_section_search}>
          <Search2Icon />
          <span>Search</span>
        </div>
        <Link href='/cart'>
          <i className='bi bi-cart3' />
        </Link>
        <Button>Sign in</Button>
      </section>
    </header>
  );
}
