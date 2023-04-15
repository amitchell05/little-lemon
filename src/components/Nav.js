// Assets
import logo from '../assets/Logo.svg';
import basket from '../assets/basket .svg';

// Components
import Hamburger from './Hamburger';

// React tools
import { useState } from 'react';

// Styles
// import './Nav.scss';

// Hamburger Reference: https://khuang159.medium.com/creating-a-hamburger-menu-in-react-f22e5ae442cb

function Nav() {
  // const [hamburgerOpen, setHamburgerOpen] = useState(false);
  // const toggleHamburger = () => {
  //   setHamburgerOpen(!hamburgerOpen);
  // };
  // return (
  //   <nav className='navbar'>
  //     <div className='navbar-hamburger' onClick={toggleHamburger}>
  //       <Hamburger />
  //     </div>
  //     <a href='/home' className='navbar-logo'>
  //       <img src={logo} alt='Little Lemon logo' />
  //     </a>
  //     <ul
  //       className={`navbar-links navbar-links--desktop ${
  //         !hamburgerOpen ? 'navbar-links--hidden' : ''
  //       }`}
  //     >
  //       <li>
  //         <a href='/home'>Home</a>
  //       </li>
  //       <li>
  //         <a href='/about'>About</a>
  //       </li>
  //       <li>
  //         <a href='/menu'>Menu</a>
  //       </li>
  //       <li>
  //         <a href='/reservations'>Reservations</a>
  //       </li>
  //       <li>
  //         <a href='/order-online'>Order Online</a>
  //       </li>
  //       <li>
  //         <a href='/login'>Login</a>
  //       </li>
  //     </ul>
  //     <div className='navbar-cart'>
  //       <img
  //         src={basket}
  //         alt='Little Lemon food order cart'
  //         className='navbar-cart-icon'
  //       />
  //     </div>
  //   </nav>
  // );
}

export default Nav;
