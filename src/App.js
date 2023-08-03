import { BrowserRouter } from 'react-router-dom';

import { OptionsProvider } from './context/Options';
import Routes from './components/routes/Routes';
import { ConfigProvider } from 'antd';

function App() {
  return (
    <div>
      <BrowserRouter>
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
        </ConfigProvider >
      </BrowserRouter>
    </div>
  );
}

export default App;
