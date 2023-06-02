import Image from "next/image";
import Link from "next/link";
import styles from "../styles/components/RegionFoodCard.module.scss";

const RegionFoodCard: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.martabak}>
        <Image src="/ImgItem/martabak.jpeg" alt="" width={500} height={500}/>
        <h1 className={styles.title}>
        <Link href="/cuisine">Martabak</Link> 
        </h1>
        <span className={styles.rating}>4.9 ⭐</span>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  );
};

export default RegionFoodCard;