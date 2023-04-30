// Assets
import restaurantFood from '../assets/restaurantfood.jpg';

// React Tools
import useWindowWidth from '../hooks/useWindowWidth';

// Styles
import './CallToAction.scss';

const CallToAction = () => {
  const windowWidth = useWindowWidth();

  const right = windowWidth - 1001 + 'px';

  return (
    <article className='hero'>
      <h2 className='visually-hidden'>Little Lemon Hero</h2>
      <section>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
      </section>
      <section>
        <h3 className='visually-hidden'>Hero Image</h3>
        <div className='hero-content'>
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
        <button type='button'>Reserve a Table</button>
      </section>
    </article>
  );
};

export default CallToAction;
