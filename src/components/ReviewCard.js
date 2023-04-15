function ReviewCard({ review }) {
  return (
    <article>
      <h3>Rating: {review.rating}</h3>
      {/* TODO: Find images from Unsplash */}
      {/* <img src={} alt={} /> */}
      <h3>{review.name}</h3>
      <p>{review.reviewText}</p>
    </article>
  );
}

export default ReviewCard;
