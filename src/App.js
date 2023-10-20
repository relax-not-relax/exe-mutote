//import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom/cjs/react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import AboutUsFeature from './features/AboutUs';
import CartFeature from './features/Cart';
import CheckoutFeature from './features/Checkout';
import FaqsFeature from './features/FAQs';
import HomeFeature from './features/Home';
import PaymentFeature from './features/Payment';
import ProductFeature from './features/Product';
import ReturnFeature from './features/ReturnGoods';
import ShippingFeature from './features/Shipping';
import UserFeature from './features/User';

function App() {
  // localStorage.removeItem('user');
  // localStorage.removeItem('gifts');
  return (
    <div className="App">
      <Header />

      <Switch>
        <Redirect from='/home' to='/' exact />

        <Route path='/' component={HomeFeature} exact />
        <Route path='/products' component={ProductFeature} />
        <Route path='/cart' component={CartFeature} />
        <Route path='/checkout' component={CheckoutFeature} />
        <Route path='/user' component={UserFeature} />
        <Route path='/about' component={AboutUsFeature} />
        <Route path='/faqs' component={FaqsFeature} />
        <Route path='/return' component={ReturnFeature} />
        <Route path='/shipping' component={ShippingFeature} />
        <Route path='/payment' component={PaymentFeature} />

      </Switch>

      <Footer />
    </div>
  );
}

export default App;
