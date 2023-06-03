import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/components/PopFoodCard.module.scss';

interface PopFoodCardProps {
  name: string;
  description: string;
  price: string;
  rating_sum: number;
  number_of_voters: number;
}

const PopFoodCard: React.FC<PopFoodCardProps> = ({
  name,
  description,
  price,
  rating_sum,
  number_of_voters,
}: PopFoodCardProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.martabak}>
        <Image
          src={`${
            process.env.NEXT_PUBLIC_API_URL
          }/images/dish-image?dish_name=${name
            .toLowerCase()
            .split(' ')
            .join('')}`}
          alt=''
          width={500}
          height={500}
          unoptimized
        />
        <h1 className={styles.title}>
          <Link href={`/cuisine/${name}`}>{name}</Link>
        </h1>
        <span className={styles.rating}>
          {(rating_sum / number_of_voters).toFixed(1)} ⭐
        </span>
        <p className={styles.desc}>{description}</p>
      </div>
    </div>
  );
};

export default PopFoodCard;
