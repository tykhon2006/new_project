
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Nav from './components/Nav/Nav';


function App(props) {
  return (
    <div className="App">

      <Header />
      <Main state={props.state} addPost={props.addPost} updateNewPostText = {props.updateNewPostText} />
      <Nav />

    </div>
  );
}

export default App;
