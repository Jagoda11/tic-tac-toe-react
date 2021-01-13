import './App.css';
import GameComponent from './components/Game/Game';
import RulesComponent from './components/Rules/Rules';

function App() {
  return (
    <div className='App'>
      <GameComponent player='O' />
      <GameComponent player='X' />
    </div>
  );
}

export default App;
