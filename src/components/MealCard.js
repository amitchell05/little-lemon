import './MealCard.scss';

export default function MealCard({ meal }) {
  return (
    <article>
      <img src={meal.image} alt={meal.imageAltText} className='meal-image' />
      <h2>{meal.name}</h2>
      <p>{meal.price}</p>
      <p>{meal.description}</p>
      <p>Order a delivery</p>
      {/* TODO: Need to add the scooter/delivery cart icon */}
      {/* <img src={} alt={} /> */}
    </article>
  );
}
