import logo from '../assets/Asset 18@4x.png';

import './Footer.scss';

export default function Footer() {
  return (
    <footer className='flex-container flex-container--wrap flex-container--space-between'>
      <img
        src={logo}
        alt='Little Lemon secondary logo'
        className='footer-logo'
      />
      <section>
        <h4>Doormat Navigation</h4>
        <nav>
          <ul>
            <li>
              <a href='/home'>Home</a>
            </li>
            <li>
              <a href='/about'>About</a>
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
      </section>
      <section>
        <h4>Contact</h4>
        <p>Address</p>
        <p>Phone Number</p>
        <p>Email</p>
      </section>
      <section>
        <h4>Social Media Links</h4>
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
      </section>
    </footer>
  );
}
