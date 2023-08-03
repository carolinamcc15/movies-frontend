import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { OptionsProvider } from './context/Options';
import Routes from './components/routes/Routes';
import { ConfigProvider } from 'antd';

function App() {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#0ea5e9',
            },
          }}
        >
          <OptionsProvider>
            <Routes />
          </OptionsProvider>
        </ConfigProvider>
      </HelmetProvider>
    </BrowserRouter>
  );
}

export default App;
