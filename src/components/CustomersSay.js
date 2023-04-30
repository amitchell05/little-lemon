// Styles
import './CustomersSay.scss';

const CustomersSay = () => {
  const reviews = [
    {
      id: '1',
      name: 'Ryan',
      reviewText: 'Review text',
      rating: 4.5,
      profilePicAltText: 'Ryan',
    },
    {
      id: '2',
      name: 'Bella',
      reviewText: 'Review text',
      rating: 5,
      profilePicAltText: 'Bella',
    },
    {
      id: '3',
      name: 'Kyle',
      reviewText: 'Review text',
      rating: 4.3,
      profilePicAltText: 'Kyle',
    },
    {
      id: '4',
      name: 'Aubrey',
      reviewText: 'Review text',
      rating: 4.75,
      profilePicAltText: 'Aubrey',
    },
  ];

  return (
    <section className='reviews'>
      <h2 className='visually-hidden'>Reviews Section</h2>
      <div className='flex-container flex-container--content-center'>
        <h2>Testimonials</h2>
      </div>
      <div className='grid-adjustable-columns'>
        {reviews.map((review) => (
          <article className='review-card' key={review.id}>
            {/* TODO: Replace rating text with star icons */}
            <h4>Rating: {review.rating}</h4>
            {/* TODO: Find images from Unsplash */}
            {/* <img src={} alt={} /> */}
            <h4>{review.name}</h4>
            <p>{review.reviewText}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default CustomersSay;
