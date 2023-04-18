import logo from '../assets/Asset 18@4x.png';

import './Footer.scss';

export default function Footer() {
  return (
    <footer className='flex-container flex-container--column flex-container--space-between'>
      <img
        src={logo}
        alt='Little Lemon secondary logo'
        className='footer-logo'
      />
      <section>
        <h5>Doormat Navigation</h5>
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
        <h5>Contact</h5>
        <div class="contact-info">
          <p>Address</p>
          <p>Phone Number</p>
          <p>Email</p>
        </div>
      </section>
      <section>
        <h5>Social Media Links</h5>
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
