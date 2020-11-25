import React, { Component } from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Logout from "./pages/Logout";


export default class App extends Component {

  constructor() {
    super();

    this.state = {
      auth: '',
    }
  }

  componentDidMount = () => {
    axios.get("auth/hassignned").then(response =>
      this.setState({ data: response.data })
    );
  }

  render() {

    console.log(this.state.data)
    return (
      <Router>

        <div className="App">

          <nav>
            <ul>
              <Link className="nav-link" to="/home">Home</Link>
            </ul>
            <ul>
              <Link className="nav-link" to="/login">Login</Link>
            </ul>
            <ul>
              <Link className="nav-link" to="/signup">Signup</Link>
            </ul>
            <ul>
              <Link className="nav-link" to="/dashboard">Dashboard</Link>
            </ul>
            <ul>
              <Link className="nav-link" to="/logout">Logout</Link>
            </ul>
          </nav>

          <Switch>
            <Route path="/home" exact>
              <Home isAuth={this.state.data} />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/dashboard">
              <Dashboard isAuth={this.state.data} />
            </Route>
            <Route path="/logout">
              <Logout />
            </Route>
          </Switch>
        </div>
      </Router>
    );

  }
}
