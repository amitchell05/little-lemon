import hamburgerIcon from './assets/🦆 icon _hamburger menu.svg';

import './Hamburger.scss';

function Hamburger() {
  return (
    <div className='hamburger'>
      <img src={hamburgerIcon} alt='Hamburger menu' />
    </div>
  );
}

export default Hamburger;
