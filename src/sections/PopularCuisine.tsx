import styles from '@/styles/sections/PopularCuisine.module.scss';
import PopFoodCard from "@/components/PopFoodCard";

interface PopularCuisineProps {
  cuisines: {};
}

export default function PopularCuisine({ cuisines }: PopularCuisineProps) {
  return (
    <section className={styles.container}>
      <h2>Popular Cuisine</h2>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
        in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </p>
      <div className={styles.wrapper}>
        <PopFoodCard />
        <PopFoodCard />
        <PopFoodCard />
        <PopFoodCard />
      </div>
    </section>
  );
}
