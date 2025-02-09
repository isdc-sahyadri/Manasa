import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import AddProduct from './components/AddProduct';
import Register from './components/Register';
import Login from './components/Login';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ProductList} />
        <Route path="/product/:id" component={ProductDetail} />
        <Route path="/add-product" component={AddProduct} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
};

export default App;