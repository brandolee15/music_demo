import logo from './logo.svg';
import './App.css';
import Artist from './components/Artist';
import Song1 from './components/Song1';
import FaveButton from './components/likeBtn';


function App() {
  return (
    <div className="App">
      <Artist />
      <Song1 />
      <FaveButton />
    </div>
  );
}

export default App;
