
import Signup from './signup';
import { Home } from './Home/Home'
import About from './About/About'
import { auth } from '../firebase.js'
import { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { NavBar } from './navbar/navbar'
class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }
  render() {
    return (

      <BrowserRouter>
        <NavBar currentUser={this.state.currentUser} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </BrowserRouter>
    );
  }

}

export default App;
