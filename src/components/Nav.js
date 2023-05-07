// Assets
import logo from '../assets/Logo.svg';
import basket from '../assets/basket1.svg';
import hamburgerIcon from '../assets/🦆_icon_hamburger_menu.svg';

// React Tools
import useWindowWidth from '../hooks/useWindowWidth';
import { useIsMenuOpen } from '../contexts/MenuContext';
import { Link } from 'react-router-dom';

// Styles
import './Nav.scss';

const Nav = () => {
  const windowWidth = useWindowWidth();

  const { isMenuOpen, toggleMenu } = useIsMenuOpen();

  if (isMenuOpen && windowWidth >= 768) {
    toggleMenu();
  }

  return (
    <nav aria-label='header-navigation' className='navbar'>
      <div className='util-container'>
        <div className='navbar-hamburger-icon' onClick={toggleMenu}>
          <img src={hamburgerIcon} alt='Hamburger menu' />
        </div>
        <a href='/home' className='navbar-logo'>
          <img src={logo} alt='Little Lemon logo' />
        </a>
        <ul className={`navbar-menu ${isMenuOpen ? 'navbar-menu--open' : ''}`}>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/menu'>Menu</Link>
          </li>
          <li>
            <Link to='/booking' className='nav-item'>
              Reservations
            </Link>
          </li>
          <li>
            <Link to='/order-online'>Order Online</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
        </ul>
        <div className='navbar-cart-icon'>
          <img src={basket} alt='Little Lemon food order cart' />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
