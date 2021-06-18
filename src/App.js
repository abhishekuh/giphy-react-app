import { BrowserRouter as Router ,Switch , Route } from "react-router-dom";
import Home from './components/Home'
import './App.css';
import GifDetail from "./components/GifDetail";

// The components home and gif detail are rendered when the respective path is entered

function App() {
  return (
    <div className="theme-color">
    <div className="content">
      <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/gif/:id" component={GifDetail}></Route>
      </Switch>
      </Router>
    </div>
    </div>
  );
}

export default App;
