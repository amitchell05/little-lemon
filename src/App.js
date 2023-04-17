// Components
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

// Styles
import './App.scss';

export default function App() {
  return (
    <>
      <div className='overlay'></div>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}
