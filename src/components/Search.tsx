import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '@/styles/components/Search.module.scss';

export default function Search() {
  const [active, setActive] = useState(true);
  return (
    <div className={styles.container}>
      <i className='bi bi-search' />
      {active ? (
        <motion.input
          style={{
            fontSize: '1.125rem',
            backgroundColor: 'inherit',
            padding: '0.5rem 0.5rem',
            borderRadius: '5px',
            border: 'none',
          }}
          type='text'
          placeholder='Search...'
        />
      ) : (
        <span>Search</span>
      )}
    </div>
  );
}
