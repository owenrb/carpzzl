/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';

import {configureStore} from '@reduxjs/toolkit';
import authReducer from './src/store/slice/auth.slice';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

const reduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => reduxApp);
