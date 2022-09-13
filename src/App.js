import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header name="first Header" title="first card"/>
      <hr/>
      <Header name="second Header" title="second card"/>
      <h1>React JS</h1>
      <p>First Para</p>
    </div>
  );
}

export default App;
