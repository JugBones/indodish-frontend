import styles from '@/styles/sections/PopularCuisine.module.scss';

interface PopularCuisineProps {
  cuisines: {};
}

export default function PopularCuisine({ cuisines }: PopularCuisineProps) {
  return (
    <section className={styles.container}>
      <h2>Popular Cuisine</h2>
    </section>
  );
}
