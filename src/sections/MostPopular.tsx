import ProductCard from '@/components/ProductCard';
import styles from '@/styles/sections/MostPopular.module.scss';

export default function MostPopular() {
  return (
    <section className={styles.container}>
      <div>
        <h2>Most Popular</h2>
      </div>
      <ProductCard />
    </section>
  );
}
