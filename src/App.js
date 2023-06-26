import { Heading } from '@chakra-ui/react';
import './App.css';
import CardComponent from './components/CardComponent';
import ItemsModal from './components/ItemsModal';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Heading className="heading" size='lg' fontSize='50px' marginTop={10}>
          Characters
        </Heading>
        <ItemsModal className="itemsModal"></ItemsModal>
      </header>
    </div>
  );
}

export default App;
