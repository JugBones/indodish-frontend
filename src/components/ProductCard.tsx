import Image from 'next/image';
import styles from '@/styles/components/ProductCard.module.scss';

type ProductCardProps = {};

export default function ProductCard({}: ProductCardProps) {
  return (
    <div className={styles.container}>
      <Image src='' alt='' width={200} height={200} unoptimized />
    </div>
  );
}
