import './Hero.scss';

import restaurantFood from '../assets/restaurantfood.jpg';
import Button from './Button';

export default function Hero() {
  return (
    <article className='hero'>
      <h2 className='visually-hidden'>Little Lemon Hero</h2>
      <section>
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <Button text='Reserve a Table' className='button-primary'></Button>
      </section>
      <section>
        <h3 className='visually-hidden'>Hero Image</h3>
        <img
          src={restaurantFood}
          alt='Restaurant food on a serving tray'
          className='hero-image'
        />
      </section>
    </article>
  );
}
