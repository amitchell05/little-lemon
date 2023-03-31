import './App.scss';

import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import Nav from './Nav';

function App() {
  return (
    <div className="grid-container">
      <Header></Header>
      <Nav></Nav>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
