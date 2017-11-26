/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers'
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyAPyh6P9AderjJv3uXRuTGdUeCntX7iR6s",
      authDomain: "manager-c74fc.firebaseapp.com",
      databaseURL: "https://manager-c74fc.firebaseio.com",
      projectId: "manager-c74fc",
      storageBucket: "manager-c74fc.appspot.com",
      messagingSenderId: "341348454872"
    };
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (

      <Provider store={store}>
        <View>
          <LoginForm/>
        </View>
      </Provider>
    );
  }
}

export default App;
