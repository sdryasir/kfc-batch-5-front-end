import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Slider from './components/Slider'
import Home from './pages/Home'
import Login from './pages/Login'
import Location from './pages/Location'
import Contact from './pages/Contact';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Products from './pages/Products';

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
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
