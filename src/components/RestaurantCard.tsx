import Image from 'next/image';
import styles from '@/styles/components/RestaurantCard.module.scss';

export default function RestaurantCard() {
  return (
    <div className={styles.container}>
      <Image src='' alt='' width={300} height={300} />
    </div>
  );
}
