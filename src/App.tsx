import React from 'react';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import Accounts from './Accounts';
import Account from './Account';
import './App.css';

const Home = () => <h2>Home Page</h2>;
const About = () => <h2>About Page</h2>;

const App = () => (
  <BrowserRouter>
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <div className="container">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/" exact={true}>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/accounts">
              Accounts
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>

    <div className="container">
      <Switch>
        <Route path="/accounts">
          <Accounts />
          <Route path="/accounts/:id" children={<Account />} />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
