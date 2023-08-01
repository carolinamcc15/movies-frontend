import { OptionsProvider } from './context/Options';
import MovieForm from './components/MovieForm';
import './App.css';

function App() {
  return (
    <div>
      <OptionsProvider>
        <h1 className='header'>Películas</h1>
        <MovieForm />
      </OptionsProvider>
    </div>
  );
}

export default App;
