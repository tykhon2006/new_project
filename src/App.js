import logo from './logo.svg';
import './App.css';

function App() {
 return (
  <div className="App">
        <a href="#" className="options"></a>
        <input type="text" placeholder="Поиск" className="search"></input>   
        <nav>
           <ul className="menu">
                <li><a href="#" className="userName">User</a></li>
                <li><a href="#">Call</a></li>
                <li><a href="#">User Options</a></li>
                <li><a href="#">Find</a></li>
           </ul>
      </nav>    
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
  );
}

export default App;
