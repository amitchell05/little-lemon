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
        <nav aria-label='doormat-navigation'>
          <h3>Little Lemon</h3>
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
              <Link to='/login'>Login</Link>
            </li>
          </ul>
        </nav>
        <article>
          <h3>Contact</h3>
          <ul>
            <li>Address</li>
            <li>Phone Number</li>
            <li>Email</li>
          </ul>
        </article>
        <nav aria-label='social-media-links'>
          <h3>Social Media</h3>
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
      </div>
    </footer>
  );
};

export default Footer;
