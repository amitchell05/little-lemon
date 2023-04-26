// Assets
import restaurantFood from '../assets/restaurantfood.jpg';

// Components
import Button from './Button';

// React Tools
import useWindowWidth from '../hooks/useWindowWidth';

// Styles
import './Hero.scss';

export default function Hero() {
  const windowWidth = useWindowWidth();

  const right = windowWidth - 1001 + 'px';

  return (
    <article className='hero'>
      <h2 className='visually-hidden'>Little Lemon Hero</h2>
      <section className='hero-heading'>
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
      </section>
      <section>
        <h3 className='visually-hidden'>Hero Image</h3>
        <div className='hero-content flex-container'>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          {windowWidth >= 1200 && windowWidth < 1292 ? (
            <div style={{ right: right }}>
              <img
                src={restaurantFood}
                alt='Restaurant food on a serving tray'
                className='hero-image'
              />
            </div>
          ) : (
            <div>
              <img
                src={restaurantFood}
                alt='Restaurant food on a serving tray'
                className='hero-image'
              />
            </div>
          )}
        </div>
        <Button text='Reserve a Table' className='button-primary'></Button>
      </section>
    </article>
  );
}
