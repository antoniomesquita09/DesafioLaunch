import React from 'react';
import { Provider } from 'react-redux';

import './Config/ReactotronConfig';
import store from './Store';
import Routes from './Routes';

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
