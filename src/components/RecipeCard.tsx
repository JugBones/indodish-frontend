import Image from "next/image";
import Link from "next/link";
import styles from "../styles/components/RecipeCard.module.scss";

const RecipeCard: React.FC = () => {
  return (
    <div className={styles.container}>
      <Image src="/ImgItem/martabak.jpeg" alt="" width={500} height={500}/>
      <h1 className={styles.title}> Recipe
      </h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  );
};

export default RecipeCard;