//import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom/cjs/react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeFeature from './features/Home';

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Redirect from='/home' to='/' exact />

        <Route path='/' component={HomeFeature} exact />

      </Switch>

      <Footer />
    </div>
  );
}

export default App;
