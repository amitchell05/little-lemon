// Assets
import logo from '../assets/Logo.svg';
import basket from '../assets/basket .svg';
import hamburgerIcon from '../assets/🦆 icon _hamburger menu.svg';

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
    <nav className='navbar'>
      <div className='container'>
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
            <a href='/about'>About</a>
          </li>
          <li>
            <a href='/menu'>Menu</a>
          </li>
          <li>
            <Link to='/booking' className='nav-item'>
              Reservations
            </Link>
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
      </div>
    </nav>
  );
};

export default Nav;
