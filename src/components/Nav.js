// Assets
import logo from '../assets/Logo.svg';
import basket from '../assets/basket .svg';
import hamburgerIcon from '../assets/🦆 icon _hamburger menu.svg';
import { useIsMenuOpen } from '../contexts/MenuContext';

// React tools
import useWindowWidth from '../hooks/useWindowWidth';

// Styles
import './Nav.scss';

// Resource: https://youtu.be/23BHwAFIZmk

function Nav() {
  const windowWidth = useWindowWidth();

  const { isMenuOpen, toggleMenu } = useIsMenuOpen();

  if (isMenuOpen && windowWidth >= 768) {
    toggleMenu();
  }

  return (
    <nav className='flex-container flex-container--items-center flex-container--space-between'>
      <div className='header-hamburger-menu' onClick={toggleMenu}>
        <img src={hamburgerIcon} alt='Hamburger menu' />
      </div>
      <a href='/home' className='header-logo'>
        <img src={logo} alt='Little Lemon logo' />
      </a>
      <ul className={`header-menu ${isMenuOpen ? 'header-menu--open' : ''}`}>
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
      <div className='header-cart'>
        <img
          src={basket}
          alt='Little Lemon food order cart'
          className='header-cart-icon'
        />
      </div>
    </nav>
  );
}

export default Nav;
