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
                <a href='about'>About</a>
              </li>
              <li>
                <a href='/menu'>Menu</a>
              </li>
              <li>
                <Link to='/booking'>Reservations</Link>
              </li>
              <li>
                <a href='/order-online'>Order Online</a>
              </li>
              <li>
                <a href='/login'>Login</a>
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
