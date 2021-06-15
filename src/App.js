import { BrowserRouter as Router ,Switch , Route } from "react-router-dom";
import Home from './components/Home'
import './App.css';
import GifDetail from "./components/GifDetail";

import { Provider } from 'react-redux'
import { createStore } from 'redux'
// import rootReducer from './reducers'
// const store = createStore(rootReducer)

function App() {
  return (
    <div className="theme-color">
    <div className="content">
      {/* <Provider store={store}> */}
      <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/gif/:id" component={GifDetail}></Route>
      </Switch>
      </Router>
      {/* </Provider> */}
    </div>
    </div>
  );
}

export default App;
