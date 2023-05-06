// Assets
import footerLogo from '../assets/Asset18@4x.png';

// React Tools
import { Link } from 'react-router-dom';

// Styles
import './Footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='util-container'>
        <img src={footerLogo} alt='Little Lemon footer logo'></img>
        <article>
          <h3>Doormat Navigation</h3>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='about'>About</Link>
              </li>
              <li>
                <Link to='/menu'>Menu</Link>
              </li>
              <li>
                <Link to='/booking'>Reservations</Link>
              </li>
              <li>
                <Link to='/order-online'>Order Online</Link>
              </li>
              <li>
                <Link tp='/login'>Login</Link>
              </li>
            </ul>
          </nav>
        </article>
        <article>
          <h3>Contact</h3>
          <ul>
            <li>Address</li>
            <li>Phone Number</li>
            <li>Email</li>
          </ul>
        </article>
        <article>
          <h3>Social Media Links</h3>
          <nav>
            <ul>
              <li>
                <a href='https://www.facebook.com'>Facebook</a>
              </li>
              <li>
                <a href='https://www.instagram.com'>Instagram</a>
              </li>
              <li>
                <a href='https://www.twitter.com'>Twitter</a>
              </li>
            </ul>
          </nav>
        </article>
      </div>
    </footer>
  );
};

export default Footer;
