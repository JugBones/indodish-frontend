import Image from "next/image";
import styles from "../styles/components/PopFoodCard.module.scss";

const PopFoodCard: React.FC = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/martabak.jpeg" alt="" width={500} height={500} />
      <h1 className={styles.title}>Matabak</h1>
      <span className={styles.rating}>4.9</span>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  );
};

export default PopFoodCard;