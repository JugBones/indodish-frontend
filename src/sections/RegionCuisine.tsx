import { Playfair_Display } from 'next/font/google';
import RegionFoodCard from '@/components/RegionFoodCard';
import styles from '@/styles/sections/RegionCuisine.module.scss';
import { useRouter } from 'next/router';
interface Dish {
  id: string;
  name: string;
  description: string;
  price: string;
  rating_sum: number;
  number_of_voters: number;
}
interface RegionCuisineProps {
  reg_cuisines: Dish[];
}

const playfairDisplay = Playfair_Display({
  weight: ['400', '600'],
  subsets: ['latin'],
});

export default function RegionCuisine({ reg_cuisines }: RegionCuisineProps) {
  const router = useRouter();

  return (
    <section className={`${styles.container} ${playfairDisplay.className}`}>
      <h2>{router.query.region_name} Cuisine</h2>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
        in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </p>
      <div className={styles.wrapper}>
        {reg_cuisines.length > 0
          ? reg_cuisines.map((dish) => <RegionFoodCard dish={dish} />)
          : 'Nothing'}
      </div>
    </section>
  );
}
