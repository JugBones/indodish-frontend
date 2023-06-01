import styles from '@/styles/sections/RecipePost.module.scss';
import RecipeCard from "../components/RecipeCard";

interface RecipePostProps {
  recipe: {};
}

export default function PopularCuisine({ recipe }: RecipePostProps) {
  return (
    <section className={styles.container}>
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
        <RecipeCard />
      </div>
    </section>
  );
}
