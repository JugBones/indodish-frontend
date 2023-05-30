import styles from '@/styles/components/Rating.module.scss';

interface RatingProps {
  rating: number;
  reviews: number;
}

export default function Rating({ rating, reviews }: RatingProps) {
  return (
    <div className={styles.container}>
      <div>
        {[...Array(Math.floor(rating / reviews))].map(() => (
          <i className={`bi bi-star-fill ${styles.star_fill}`} />
        ))}
        {[...Array(5 - Math.floor(rating / reviews))].map(() => (
          <i className={`bi bi-star ${styles.star}`} />
        ))}
      </div>
      <p>{reviews} Reviews</p>
    </div>
  );
}
