import Image from 'next/image';
import BatikBackground from '../../public/batik-background.webp';
import styles from '@/styles/sections/SearchRegion.module.scss';
import Button from '@/components/Button';
import Link from 'next/link';

export default function SearchRegion() {
  const islands = [
    'Pulau Jawa',
    'Pulau Kalimantan',
    'Pulau Papua',
    'Pulau Sulawesi',
    'Pulau Sumatra',
  ];
  return (
    <section className={styles.container}>
      <h2>Search by Region</h2>
      <div className={styles.buttonsContainer}>
        {islands.map((region) => (
          <Button
            key={region}
            styling={{
              padding: '0.5rem 0.75rem',
              marginBottom: '1.5rem',
              cursor: 'pointer',
              borderRadius: '5px',
              backgroundColor: '#ffffff',
              color: '#41280e',
              fontWeight: 600,
              fontSize: '1.125rem',
              border: 'solid 2px',
            }}
            hoverStying={{
              color: '#ffffff',
              backgroundColor: '#e37300',
              borderColor: '#41280e',
            }}
          >
            <Link
              href={`/search?region=${region
                .split(' ')[1]
                .toLocaleLowerCase()}`}
              style={{ color: 'inherit' }}
            >
              {region}
            </Link>
          </Button>
        ))}
      </div>
      <div className={styles.backgroundContainer}>
        <Image
        className={styles.batik_background}
        src={BatikBackground}
        alt='Batik Background'
        fill
        />
      </div>
    </section>
  );
}
