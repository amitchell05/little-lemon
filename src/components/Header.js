// Components

// Assets
import headerLogo from '../assets/Logo.svg';

// Components
import Nav from './Nav';

// Styles
// import './Header.scss';

export default function Header() {
  return (
    <header>
      <img src={headerLogo} alt='Little Lemon header logo'></img>
      <Nav></Nav>
    </header>
  );
}
