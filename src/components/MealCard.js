import './MealCard.scss';

export default function MealCard({ meal }) {
  return (
    <article className='meal-card'>
      <img
        src={meal.image}
        alt={meal.imageAltText}
        className='meal-card-image'
      />
      <h2>{meal.name}</h2>
      <p className='meal-card-price'>{meal.price}</p>
      <p>{meal.description}</p>
      <p>Order a delivery</p>
      {/* TODO: Need to add the scooter/delivery cart icon */}
      {/* <img src={} alt={} /> */}
    </article>
  );
}
