import { BrowserRouter } from 'react-router-dom';

import { OptionsProvider } from './context/Options';
import Routes from './components/routes/Routes';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <OptionsProvider>
          <Routes />
        </OptionsProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
