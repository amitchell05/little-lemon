// Assets
import restaurantFood from '../assets/restaurantfood.jpg';

// Components
import CallToAction from './CallToAction';
import Chicago from './Chicago';
import CustomersSay from './CustomersSay';
import Specials from './Specials';

const HomePage = () => {
  const hero = {
    title: 'Little Lemon',
    subTitle: 'Chicago',
    leadText:
      'We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.',
    image: restaurantFood,
    link: '/booking',
    linkText: 'Reserve a Table',
  };

  return (
    <>
      <CallToAction hero={{ ...hero }} />
      <Specials></Specials>
      <CustomersSay></CustomersSay>
      <Chicago></Chicago>
    </>
  );
};

export default HomePage;
