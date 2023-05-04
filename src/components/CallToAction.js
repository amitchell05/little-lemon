// Assets
import restaurantFood from '../assets/restaurantfood.jpg';

// Styles
import './CallToAction.scss';

const CallToAction = () => {
  return (
    <div className='hero'>
      <div className='container'>
        <section>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <div className='hero-content'>
            <p className='lead-text'>
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <div className='hero-image-container'>
              <img
                src={restaurantFood}
                alt='Restaurant food on a serving tray'
                className='hero-image'
              />
            </div>
          </div>
          <button type='button' className='button button-primary'>
            Reserve a Table
          </button>
        </section>
      </div>
    </div>
  );
};

export default CallToAction;
