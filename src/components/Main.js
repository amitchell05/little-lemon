// Components
import Footer from './Footer';
import Header from './Header';

// React Tools
import { useIsMenuOpen } from '../contexts/MenuContext';
import { Outlet } from 'react-router-dom';

const Main = () => {
  const { isMenuOpen } = useIsMenuOpen();

  return (
    <>
      <Header />
      <main className={isMenuOpen ? 'util-overlay' : ''}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Main;
