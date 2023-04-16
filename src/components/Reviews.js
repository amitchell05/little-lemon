// Components
import ReviewCard from './ReviewCard';

// Styles
import './Reviews.scss';

export default function Reviews() {
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
    <section class='reviews'>
      <h2>Testimonials</h2>
      <div class='grid-adjustable-columns'>
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </section>
  );
}
