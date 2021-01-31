import './App.css';
import { Navbar } from './components/main-page/Navbar/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages';
import Catalogue from './components/catalogue-page/catalogue';
import Sidebar from './components/Sidebar';
import { useState } from 'react';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="App">
      <Router>
        <Navbar toggle={toggle}/>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/catalogue' component={Catalogue}/>
        </Switch>
     </Router>
    </div>
  );
}

export default App;
