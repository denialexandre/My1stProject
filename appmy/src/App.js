import './App.css';
import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <ItemListContainer greeting="Welcome to my shop!" />
        <p>
          ¡Holi!
        </p>
        <p>
          ¡Hola, mundoooooo!
        </p>
      </header>
    </div>
  );
}

export default App;
