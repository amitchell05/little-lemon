// Assets
import MarioAndAdrianA from '../assets/Mario_and_Adrian_A.jpg';
import MarioAndAdrianB from '../assets/Mario_and_Adrian_B.jpg';

// Styles
import './Chicago.scss';

const Chicago = () => {
  return (
    <article className='about'>
      <h2 className='visually-hidden'>About Little Lemon</h2>
      <div className='container'>
        <section className='about-content'>
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit.
          </p>
        </section>
        <section className='about-image-group'>
          <h2 className='visually-hidden'>Mario and Adrian</h2>
          <img
            src={MarioAndAdrianA}
            alt='Mario and Adrian'
            className='about-image about-image-1'
          />
          <img
            src={MarioAndAdrianB}
            alt='Mario and Adrian'
            className='about-image about-image-2'
          />
        </section>
      </div>
    </article>
  );
};

export default Chicago;
