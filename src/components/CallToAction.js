// Assets
import restaurantFood from '../assets/restaurantfood.jpg';

// React Tools
import { Link } from 'react-router-dom';

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
          <Link to='/booking' className='link-button link-button-primary'>
            Reserve a Table
          </Link>
        </section>
      </div>
    </div>
  );
};

export default CallToAction;
