import './App.css';
import { Navbar } from './components/main-page/Navbar/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages';
import Catalogue from './components/catalogue-page/catalogue';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Sidebar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/catalogue' component={Catalogue}/>
        </Switch>
     </Router>
    </div>
  );
}

export default App;
