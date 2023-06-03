import styles from '@/styles/sections/RecipePost.module.scss';
import RecipeCard from "../components/RecipeCard";
import { Playfair_Display } from 'next/font/google';

// interface RecipePostProps {
//   recipe: {};
// }

const playfairDisplay = Playfair_Display({
  weight: ['400', '600'],
  subsets: ['latin'],
});

export default function PopularCuisine(/*{ recipe }: RecipePostProps*/) {
  return (
    <section className={`${styles.container} ${playfairDisplay.className}`}>
      <h2>Recipes</h2>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
        in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </p>
      <div className={styles.wrapper}>
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
      </div>
    </section>
  );
}
