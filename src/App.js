import './App.css';
import CardComponent from './components/CardComponent';
import ItemsModal from './components/ItemsModal';
import BackdropExample from './components/ItemsModal';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Characters</h1>
      <ItemsModal className="itemsModal"></ItemsModal>
      </header>
    </div>
  );
}

export default App;
