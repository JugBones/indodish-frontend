import Image from 'next/image';
import Rating from '@/components/Rating';
import Food from '../../public/hero-image.webp';
import styles from '@/styles/components/FoodCard.module.scss';
import Link from 'next/link';

interface FoodCardProps {
  restaurantName: string;
  rating_sum: number;
  number_of_voters: number;
}

export default function FoodCard({
  restaurantName,
  rating_sum,
  number_of_voters,
}: FoodCardProps) {
  return (
    <div className={styles.container}>
      <Link href={`/restaurant/${restaurantName.toLowerCase()}`}>
        <Image
          src={`${process.env.NEXT_PUBLIC_API_URL}/images/restaurant-image?restaurant_name=${restaurantName}&size=300`}
          alt=''
          width={300}
          height={300}
          unoptimized
        />
        <h3>{restaurantName}</h3>
        <Rating rating={rating_sum} reviews={number_of_voters} />
      </Link>
    </div>
  );
}
