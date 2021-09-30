
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import HomePage from './pages/HomePage';
import Contact from './pages/Contact';
import About from './pages/About';
import Projects from './pages/Projects';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/contact" exact component={Contact}/>
        <Route path="/about" exact component={About}/>
        
        <Route path="/projects" exact component={Projects}/>
      </Switch>
    </Router>
  );
}

export default App;
