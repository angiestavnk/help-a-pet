import './App.css';
import { Navbar } from './components/main-page/Navbar/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/main-page/Home/Home';
import Catalogue from './components/Catalogue-page/catalogue';
import Sidebar from './components/Sidebar';
import { useState } from 'react';
import SignUp from './components/Signup';
import Login from './components/Login';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="App">
      <Router>
        <Navbar toggle={toggle} />
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/catalogue' component={Catalogue} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/login' component={Login} />
        </Switch>
     </Router>
    </div>
  );
}

export default App;
