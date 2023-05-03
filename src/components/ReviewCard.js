// React Tools
import { AiFillStar } from 'react-icons/ai';

// Styles
import './ReviewCard.scss';

const ReviewCard = (review) => {
  return (
    <article className='review-card' key={review.id}>
      <h2 className='visually-hidden'>Review Card</h2>
      <section className='review-card-rating'>
        <h6>Rating:</h6>
        <div>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
      </section>
      <div className='review-card-heading'>
        <img
          src={review.profilePic}
          alt={review.name}
          className='review-card-profile-pic'
        />
        <h4>{review.name}</h4>
      </div>
      <p>{review.reviewText}</p>
    </article>
  );
};

export default ReviewCard;
