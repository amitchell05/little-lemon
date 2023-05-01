// Assets
import greekSalad from '../assets/greek_salad.jpg';
import bruchetta from '../assets/bruchetta.svg';
import lemonDessert from '../assets/lemon_dessert.jpg';
import { MdDeliveryDining } from 'react-icons/md';

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
      <div className='container'>
        <div className='specials-heading'>
          <h2>Specials</h2>
          <button type='button' className='button button-primary'>
            Online Menu
          </button>
        </div>
        <div className='meal-cards'>
          {meals.map((meal) => (
            <article className='meal-card' key={meal.id}>
              <h4 className='visually-hidden'>{meal.name} Meal Card</h4>
              <img
                src={meal.image}
                alt={meal.imageAltText}
                className='meal-card-image'
              />
              <div className='meal-card-content'>
                <div className='meal-card-heading'>
                  <h4>{meal.name}</h4>
                  <span>{meal.price}</span>
                </div>
                <p className='meal-card-description'>{meal.description}</p>
                <div className='meal-card-delivery'>
                  <h5>Order a delivery</h5>
                  <MdDeliveryDining />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specials;
