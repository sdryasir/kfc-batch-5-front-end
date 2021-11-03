import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Slider from './components/Slider'
import Home from './pages/Home'
import Login from './pages/Login'
import Location from './pages/Location'
import Contact from './pages/Contact';
import { useState } from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Products from './pages/Products';
import Detail from './pages/Detail';
import Register from './pages/Register';
import Countries from './pages/Countries';
import NewProduct from './pages/NewProduct';
import Edit from './pages/Edit';

function App() {

  return (
    <div className="container">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/location" component={Location} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/collection/:category" component={Products} />
          <Route exact path="/add-product" component={NewProduct} />
          <Route exact path="/edit/:id" component={Edit} />
          <Route exact path="/products/:id">
            <Detail />
          </Route>
          <Route exact path="/register" component={Register} />
          <Route exact path="/countries" component={Countries} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;


/*
CRUDS

C=Create
R=Read
U=Update
D=Delete
S=Search


HTTP Requests Types
1 - GET - gets the data(resource) from the server
2 - POST - posts(sends) the data(resource) to the server
3 - PUT - Update the data(resource) on the server
4 - DELETE - deletes the data(resource) on the server


There are two ways to make an http requests from the code
1 - Use fetch API
2 - Use Axios package


Axios gives some built-in function to make different types of requests.

- axios.get() => to get the data from the server
- axos.post() => to post the data to the server
- axios.put() => to update the data on the server
- axios.delete()  => to delete the data



*/

