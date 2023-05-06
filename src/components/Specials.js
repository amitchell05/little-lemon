// Assets
import greekSalad from '../assets/greek_salad.jpg';
import bruchetta from '../assets/bruchetta.svg';
import lemonDessert from '../assets/lemon_dessert.jpg';

// Components
import SpecialCard from './MenuCard';

// Styles
import './Specials.scss';

const Specials = () => {
  const meals = [
    {
      id: '1',
      name: 'Greek Salad',
      description:
        'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
      price: '$12.99',
      image: greekSalad,
      imageAltText: 'Greek Salad',
    },
    {
      id: '2',
      name: 'Bruchetta',
      description:
        'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
      price: '$5.99',
      image: bruchetta,
      imageAltText: 'Bruchetta',
    },
    {
      id: '3',
      name: 'Lemon Dessert',
      description:
        'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
      price: '$5.00',
      image: lemonDessert,
      imageAltText: 'Lemon Dessert',
    },
  ];

  return (
    <section className='specials'>
      <h2 className='visually-hidden'>Specials Section</h2>

      <div className='util-container'>
        <article className='specials-actions'>
          <h2>Specials</h2>
          <button type='button' className='button button--primary'>
            Online Menu
          </button>
        </article>

        <section className='specials-cards'>
          {meals.map((meal) => (
            <SpecialCard key={meal.id} {...meal} />
          ))}
        </section>
      </div>
    </section>
  );
};

export default Specials;
