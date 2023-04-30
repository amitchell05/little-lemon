// Assets
import greekSalad from '../assets/greek_salad.jpg';
import bruchetta from '../assets/bruchetta.svg';
import lemonDessert from '../assets/lemon_dessert.jpg';

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
      <div className='flex-container flex-container--items-center flex-container--space-between'>
        <h2>Specials</h2>
        <button type='button' className='button-primary'>
          Online Menu
        </button>
      </div>
      <div className='grid-adjustable-columns'>
        {meals.map((meal) => (
          <article className='meal-card' key={meal.id}>
            <img
              src={meal.image}
              alt={meal.imageAltText}
              className='meal-card-image'
            />
            <h4>{meal.name}</h4>
            <span className='meal-card-price'>{meal.price}</span>
            <p>{meal.description}</p>
            <p>Order a delivery</p>
            {/* TODO: Need to add the scooter/delivery cart icon */}
            {/* <img src={} alt={} /> */}
          </article>
        ))}
      </div>
    </section>
  );
};

export default Specials;
