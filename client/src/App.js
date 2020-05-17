import React , { Component } from 'react';
import AppNavbar from './components/AppNavbar'
import ShoppingList from './components/ShoppingList'
import { Provider } from 'react-redux'
import store from './store'
import {Container} from 'reactstrap'
import ItemModal from "./components/itemModal"

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import itemModal from './components/itemModal';

class App extends Component{
  render(){
    return (
      <Provider store ={store}>
        <div className="App">
          <AppNavbar />
          <Container>
          <ShoppingList />
          <ItemModal />
          </Container>
        </div>
      </Provider>
  );
}
}

export default App;
