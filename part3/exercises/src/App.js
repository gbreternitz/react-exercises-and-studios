import logo from './logo.svg';
import './App.css';
import Introduction from './components/Introduction.js'
import MyProjects from './components/Projects';

function App() {
  return (
    <div className="App">
      <h1>My Hobby: Holding my Breath</h1>
      <Introduction />
      <MyProjects />
    </div>
  );
}

export default App;
