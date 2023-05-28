import Image from 'next/image';
import Rating from '@/components/Rating';
import Food from '../../public/hero-image.webp';
import styles from '@/styles/components/FoodCard.module.scss';
import Link from 'next/link';

export default function FoodCard() {
  return (
    <div className={styles.container}>
      <Link href=''>
        <Image src={Food} alt='' width={250} height={250} />
        <h3>Food</h3>
        <Rating rating={4} reviews={10} />
        <p>Rp. 5,000</p>
      </Link>
    </div>
  );
}
