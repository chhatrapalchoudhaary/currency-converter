import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home'
import './App.css';
import Header from './components/Header';
import CurrencyConverter from "./components/CurrencyConverter";
import PageNotFound from "./components/PageNotFound";
import ForgotPassword from "./components/ForgotPassword";
import Signup from "./components/Signup";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/converter">
            <CurrencyConverter />
          </Route>
          <Route exact path="/forgot-password">
            <ForgotPassword/>
            </Route>
          <Route>
            <PageNotFound/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
