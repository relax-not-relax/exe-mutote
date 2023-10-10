//import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom/cjs/react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import CartFeature from './features/Cart';
import HomeFeature from './features/Home';
import ProductFeature from './features/Product';

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Redirect from='/home' to='/' exact />

        <Route path='/' component={HomeFeature} exact />
        <Route path='/products' component={ProductFeature} />
        <Route path='/cart' component={CartFeature} />

      </Switch>

      <Footer />
    </div>
  );
}

export default App;
