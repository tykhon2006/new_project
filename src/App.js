import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Nav from './components/Nav/Nav';


function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Header />
        <Main />
        <Nav />
        
      </div>
    </BrowserRouter>
  );
}

export default App;
