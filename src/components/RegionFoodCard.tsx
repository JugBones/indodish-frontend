import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/components/RegionFoodCard.module.scss';
interface Dish {
  dish: {
    id: string;
    name: string;
    description: string;
    price: string;
    rating_sum: number;
    number_of_voters: number;
  };
}
const RegionFoodCard: React.FC<Dish> = (dish: Dish) => {
  return (
    <div className={styles.container}>
      <div className={styles.martabak}>
        <Image
          src={`${
            process.env.NEXT_PUBLIC_API_URL
          }/images/dish-image?dish_name=${dish.dish.name
            .toLowerCase()
            .split(' ')
            .join('')}`}
          alt=''
          width={500}
          height={500}
          unoptimized
        />
        <h1 className={styles.title}>
          <Link href={`/cuisine/${dish.dish.name}`}>{dish.dish.name}</Link>
        </h1>
        <span className={styles.rating}>
          {(dish.dish.rating_sum / dish.dish.number_of_voters).toFixed(1)} ⭐
        </span>
        <p className={styles.desc}>{dish.dish.description}</p>
      </div>
    </div>
  );
};

export default RegionFoodCard;
