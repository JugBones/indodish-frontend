import Link from 'next/link';
import { Playfair_Display } from 'next/font/google';
import PopFoodCard from "@/components/PopFoodCard";
import styles from '@/styles/sections/PopularCuisine.module.scss';


interface PopularCuisineProps {
  cuisines: {};
}

const playfairDisplay = Playfair_Display({
  weight: ['400', '600'],
  subsets: ['latin'],
});

export default function PopularCuisine({ cuisines }: PopularCuisineProps) {
  return (
    <section className={`${styles.container} ${playfairDisplay.className}`}>
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
