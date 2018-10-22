import React from 'react';
import * as firebase from 'firebase';
import Login from './Login/Login';
import Home from './Home/Home';
import Loading from './Loading/Loading';
import Landing from './Landing/Landing';
import Posts from './Posts/Posts';
import Add from './Add/Add';

import { connect } from 'react-redux';


import {  BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
// import { firebaseAuth } from './config/constants'


  // Initialize Firebase


function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

function PublicRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === false
        ? <Component {...props} />
        : <Redirect to='/add' />}
    />
  )
}



class App extends React.Component {
  state = {
    authed: false,
    loading: true,
  }

  componentDidMount(){
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
          loading: false,
        })
      } else {
        this.setState({
          authed: false,
          loading: false
        })
      }
    })

  }

  componentWillUnmount () {
    this.removeListener()
  }

  render() {
    return this.state.loading === true ? <Loading /> : (
      
      <Router>
        <Switch>
          <PublicRoute authed={this.state.authed} path='/login' component={Login} />
          <PrivateRoute authed={this.state.authed} path='/add' component={Add} />
          <Route authed={this.state.authed} path='/App' component={Home} />
          <Route authed={this.state.authed} path='/:id' component={Posts} />
          
          <Route path = "/" component = {Home}/>
        </Switch>
      </Router>

    );
  }
}

export default connect(mapStateToProps)(App);

// <Route path = "/OrderTracker" component = {Tracker}/>