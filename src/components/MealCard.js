import './MealCard.scss';

export default function MealCard({ meal }) {
  return (
    <article className='meal-card'>
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
  );
}
