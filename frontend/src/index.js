import React from 'react';
import { Provider } from 'react-redux';

import './Config/ReactotronConfig';
import store from './Store';
import Main from './Pages/Main';

const App = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);

export default App;
