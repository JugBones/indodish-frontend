import { Playfair_Display } from 'next/font/google';
import RegionFoodCard from "@/components/RegionFoodCard";
import styles from '@/styles/sections/RegionCuisine.module.scss';


interface RegionCuisineProps {
  reg_cuisines: {};
}

const playfairDisplay = Playfair_Display({
  weight: ['400', '600'],
  subsets: ['latin'],
});

export default function RegionCuisine({ reg_cuisines }: RegionCuisineProps) {
  return (
    <section className={`${styles.container} ${playfairDisplay.className}`}>
      <h2>Region Cuisine</h2>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
        in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </p>
      <div className={styles.wrapper}>
        <RegionFoodCard />
        <RegionFoodCard />
        <RegionFoodCard />
      </div>
    </section>
  );
}
