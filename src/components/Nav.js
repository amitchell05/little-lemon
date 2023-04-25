// Assets
import logo from '../assets/Logo.svg';
import basket from '../assets/basket .svg';
import hamburgerIcon from '../assets/🦆 icon _hamburger menu.svg';
import { useIsMenuOpen } from '../contexts/MenuContext';

// React Tools
import useWindowWidth from '../hooks/useWindowWidth';

// Styles
import './Nav.scss';

function Nav() {
  const windowWidth = useWindowWidth();

  const { isMenuOpen, toggleMenu } = useIsMenuOpen();

  if (isMenuOpen && windowWidth >= 768) {
    toggleMenu();
  }

  return (
    <nav className='flex-container navbar'>
      <div className='navbar-hamburger-icon' onClick={toggleMenu}>
        <img src={hamburgerIcon} alt='Hamburger menu' />
      </div>
      <a href='/home' className='navbar-logo'>
        <img src={logo} alt='Little Lemon logo' />
      </a>
      <ul className={`navbar-menu ${isMenuOpen ? 'navbar-menu--open' : ''}`}>
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
      <div className='navbar-cart-icon'>
        <img src={basket} alt='Little Lemon food order cart' />
      </div>
    </nav>
  );
}

export default Nav;
