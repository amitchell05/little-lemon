// Assets
import footerLogo from '../assets/Asset18@4x.png';

// Styles
import './Footer.scss';

export default function Footer() {
  return (
    <footer>
      <div className='container'>
        <img src={footerLogo} alt='Little Lemon footer logo'></img>
        <article>
          <h2>Doormat Navigation</h2>
          <nav>
            <ul>
              <li>
                <a href='/home'>Home</a>
              </li>
              <li>
                <a href='about'>About</a>
              </li>
              <li>
                <a href='/menu'>Menu</a>
              </li>
              <li>
                <a href='/reservations'>Reservations</a>
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
          <h2>Contact</h2>
          <div>
            <p>Address</p>
            <p>Phone Number</p>
            <p>Email</p>
          </div>
        </article>
        <article>
          <h2>Social Media Links</h2>
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
}
