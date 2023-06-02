import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import IndODishLogo from '@/components/IndODishLogo';
import { Playfair_Display } from 'next/font/google';
import styles from '@/styles/sections/Header.module.scss';
import Button from '@/components/Button';
import Profile from '@/components/Profile';
import Search from '@/components/Search';
import { refreshAccessToken } from '@/features/authSlice';

const playfairDisplay = Playfair_Display({
  weight: ['400', '600'],
  subsets: ['latin'],
});

export default function Header() {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, error, user } = useSelector(
    (state: RootState) => state.auth
  );
  useEffect(() => {
    dispatch(refreshAccessToken());
  }, []);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`${styles.container} ${playfairDisplay.className}`}>
      <IndODishLogo color={'#41280e'} />
      <nav className={`${styles.navigation} ${isMobileMenuOpen ? styles.open : ''}`}>
        <ul>
          <li className={styles.navigation_list_items}>
            <Link href='/about'>About</Link>
          </li>
          <li className={styles.navigation_list_items}>
            <Link href='/blog'>Blog</Link>
          </li>
          <li className={styles.navigation_list_items}>
            <Link href='/contact-us'>Contact us</Link>
          </li>
        </ul>
      </nav>

      <div className={styles.side_section}>
        <button className={styles.mobile_menu_toggle} onClick={toggleMobileMenu}>
          <i className='bi bi-list' />
        </button>
        <Search />
        {user ? (
          <>
            <Link href='/cart'>
              <i className='bi bi-cart3' />
            </Link>
            <Profile />
          </>
        ) : (
          <>
            <Button
              styling={{
                padding: '0.5rem 0.75rem',
                cursor: 'pointer',
                borderRadius: '5px',
                color: '#41280e',
                fontWeight: 600,
                fontSize: '1.125rem',
                border: 'solid 2px',
              }}
              hoverStying={{
                color: '#ffffff',
                backgroundColor: '#41280e',
                borderColor: '#41280e',
              }}
            >
              <Link href='/sign-in' style={{ color: 'inherit' }}>
                Sign in
              </Link>
            </Button>
            <Button
              styling={{
                padding: '0.5rem 0.75rem',
                cursor: 'pointer',
                borderRadius: '5px',
                backgroundColor: '#41280e',
                color: '#41280e',
                fontWeight: 600,
                fontSize: '1.125rem',
                border: 'solid 2px',
              }}
              hoverStying={{
                color: '#e37300',
                backgroundColor: '#e37300',
              }}
            >
              <Link href='/sign-up' style={{ color: '#ffffff' }}>
                Sign up
              </Link>
            </Button>
          </>
        )}
      </div>
    </header>
  );
}
