import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Nav from './components/Nav/Nav';


function App() {
  let dialogData = [
    { name: "Vasya", id: 1 },
    { name: "Vasy", id: 2 },
    { name: "Vas", id: 3 },
    { name: "Va", id: 4 },
    { name: "V", id: 5 }
];
  return (
    <BrowserRouter>
      <div className="App">

        <Header />
        <Main dialogData = {dialogData}/>
        <Nav />
        
      </div>
    </BrowserRouter>
  );
}

export default App;
