// Styles
import './CustomersSay.scss';
import ReviewCard from './ReviewCard';
import profile1 from '../assets/luis-villasmil-hh3ViD0r0Rc-unsplash.jpg';
import profile2 from '../assets/princess-4glIyBjf2Gk-unsplash.jpg';
import profile3 from '../assets/lesly-juarez-RukI4qZGlQs-unsplash.jpg';
import profile4 from '../assets/joel-mott-LaK153ghdig-unsplash.jpg';

const CustomersSay = () => {
  const reviews = [
    {
      id: '1',
      name: 'Ryan',
      reviewText: 'Review text',
      profilePic: profile1,
      resource:
        'Photo by <a href="https://unsplash.com/@luisviol?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Luis Villasmil</a> on <a href="https://unsplash.com/s/photos/profile-picture?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
    },
    {
      id: '2',
      name: 'Princess',
      reviewText: 'Review text',
      profilePic: profile2,
      resource:
        'Photo by <a href="https://unsplash.com/@princessolan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">princess</a> on <a href="https://unsplash.com/s/photos/profile-picture?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
    },
    {
      id: '3',
      name: 'Kyle',
      reviewText: 'Review text',
      profilePic: profile3,
      resource:
        'Photo by <a href="https://unsplash.com/@jblesly?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Lesly Juarez</a> on <a href="https://unsplash.com/s/photos/profile-picture?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
    },
    {
      id: '4',
      name: 'Aubrey',
      reviewText: 'Review text',
      profilePic: profile4,
      resource:
        'Photo by <a href="https://unsplash.com/@joelmott?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Joel Mott</a> on <a href="https://unsplash.com/s/photos/portrait-smile?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
    },
  ];

  return (
    <section className='reviews'>
      <h2 className='visually-hidden'>Reviews Section</h2>

      <div className='util-container'>
        <h2>Testimonials</h2>
        <div className='review-cards'>
          {reviews.map((review) => (
            <ReviewCard {...review} key={review.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomersSay;
