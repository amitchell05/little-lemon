// Styles
import './ReviewCard.scss';

export default function ReviewCard({ review }) {
  return (
    <article className='review-card'>
      {/* TODO: Replace rating text with star icons */}
      <h4>Rating: {review.rating}</h4>
      {/* TODO: Find images from Unsplash */}
      {/* <img src={} alt={} /> */}
      <h4>{review.name}</h4>
      <p>{review.reviewText}</p>
    </article>
  );
}
