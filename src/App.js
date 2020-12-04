import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <div className="chat">
        <input type="text" placeholder="Написать сообщение..." className="mainChat"></input>
        <li><a href="#" className="send">Send</a></li>
      </div>
      <ul className="chats">
        <li><a href="#" >User</a></li>
        <li><a href="#" >User</a></li>
        <li><a href="#" >User</a></li>
        <li><a href="#" >User</a></li>
        <li><a href="#" >User</a></li>
        <li><a href="#" >User</a></li>
        <li><a href="#" >User</a></li>
        <li><a href="#" >User</a></li>
        <li><a href="#" >User</a></li>
        <li><a href="#" >User</a></li>
        <li><a href="#" >User</a></li>
        <li><a href="#" >User</a></li>
        <li><a href="#" >User</a></li>
        <li><a href="#" >User</a></li>
        <li><a href="#" >User</a></li>
        <li><a href="#" >User</a></li>
        <li><a href="#" >User</a></li>
        <li><a href="#" >User</a></li>
        <li><a href="#" >User</a></li>
      </ul>



    </div>
    </BrowserRouter>
  );
}

export default App;
