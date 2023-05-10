// React Tools
import { Link } from 'react-router-dom';
import useWindowWidth from '../hooks/useWindowWidth';

// Styles
import './CallToAction.scss';

const CallToAction = ({ hero, leadTextNewline, utilHeroTitle }) => {
  const windowWidth = useWindowWidth();

  return (
    <section className='hero'>
      <h2 className='visually-hidden'>Hero</h2>
      <div className='util-container hero-section'>
        <div>
          <h1 className={utilHeroTitle}>{hero.title}</h1>
          {hero.subTitle && <h2>{hero.subTitle}</h2>}
          <div className='hero-description-section'>
            <p className={`lead-text ${leadTextNewline}`}>{hero.leadText}</p>
            <div>
              <img
                src={hero.image}
                alt='Restaurant food on a serving tray'
                className='hero-image'
              />
            </div>
          </div>
          {windowWidth >= 768 && (
            <p className={`lead-text ${leadTextNewline}`}>{hero.leadText}</p>
          )}
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
          <div>
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
