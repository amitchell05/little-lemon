// Assets
import { MdDeliveryDining } from 'react-icons/md';

// Styles
import './MenuCard.scss';

const MenuCard = (meal) => {
  return (
    <article className='menu-card'>
      <h4 className='visually-hidden'>{meal.name} Meal Card</h4>
      <img src={meal.image} alt={meal.imageAltText} />
      <section className='menu-card-content'>
        <div className='menu-card-heading'>
          <h4>{meal.name}</h4>
          <span>{meal.price}</span>
        </div>
        <p>{meal.description}</p>
      </section>
      <div className='menu-card-actions'>
        <a href='/order-delivery'>Order for Delivery</a>
        <MdDeliveryDining />
      </div>
    </article>
  );
};

export default MenuCard;
