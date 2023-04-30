// Components
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

// React tools
import { useIsMenuOpen } from './contexts/MenuContext';

// Styles
import './App.scss';

const App = () => {
  const { isMenuOpen } = useIsMenuOpen();

  return (
    <>
      <div className={isMenuOpen ? 'overlay' : ''}></div>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}

export default App;
