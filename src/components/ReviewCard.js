// Styles
import './ReviewCard.scss';

export default function ReviewCard({ review }) {
  return (
    <article className='review-card'>
      <h3>Rating: {review.rating}</h3>
      {/* TODO: Find images from Unsplash */}
      {/* <img src={} alt={} /> */}
      <h3>{review.name}</h3>
      <p>{review.reviewText}</p>
    </article>
  );
}
