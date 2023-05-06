// React Tools
import { Link } from 'react-router-dom';
import useWindowWidth from '../hooks/useWindowWidth';

// Styles
import './CallToAction.scss';

const CallToAction = ({ hero, className }) => {
  const windowWidth = useWindowWidth();

  return (
    <section className='hero'>
      <h2 className='visually-hidden'>Hero</h2>
      <div className='util-container hero-section'>
        <div className='hero-content'>
          <h1 className={className}>{hero.title}</h1>
          {hero.subTitle && <h2>{hero.subTitle}</h2>}
          <div className='hero-description-section'>
            <p className='lead-text'>{hero.leadText}</p>
            <div className='hero-image-container'>
              <img
                src={hero.image}
                alt='Restaurant food on a serving tray'
                className='hero-image'
              />
            </div>
          </div>
          {windowWidth >= 768 && <p className='lead-text'>{hero.leadText}</p>}
          {hero.link && hero.linkText && (
            <Link
              to={hero.link}
              className='hero-button link-button link-button--primary'
            >
              {hero.linkText}
            </Link>
          )}
        </div>
        {windowWidth >= 768 && (
          <div className='hero-image-container'>
            <img
              src={hero.image}
              alt='Restaurant food on a serving tray'
              className='hero-image'
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default CallToAction;
