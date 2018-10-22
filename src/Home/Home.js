import React    from "react";
import * as firebase from 'firebase';
import {} from '../Firebase.js';
import _ from 'lodash';



import "./Home.css";
import MenuBar from "../menuBar/menuBar";

import { Field, reduxForm, reset } from 'redux-form';

import { getPosts } from '../Actions/mainActions';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}


class Home extends React.Component {
	constructor(){
		super();

		this.increment = this.increment.bind(this);
	}

	increment() {
		this.props.dispatch({ type: 'INCREMENT' });
	}

	goToLink(key) {
		window.location = "/"+key;
	}

	signOut(e) {
	    e.preventDefault();
	    firebase.auth().signOut().then(function() {
	      // Sign-out successful.
	      alert("BYE!");
	    }).catch(function(error) {
	      // An error happened.
	      alert("Yikes somethng HAPPEND",error);
	    });
	  }

	componentDidMount(){
		var user = firebase.auth().currentUser;
		if (user != null) {
		  user.providerData.forEach(function (profile) {
		    console.log(user);
		  });
		}
	}

	componentWillMount() {
		this.props.getPosts();
	}

  render() {
    return (
  	
    <div className="home">
    	<MenuBar signOut={this.signOut}></MenuBar>
    	<div className="posts">
			
      	{ _.map(this.props.posts, (post, key) => {
      		return (
      			<div key={key} className="list" onClick={() => { this.goToLink(key)}}>
	      			<h3>{post.titulo}</h3>
	      			<div>{post.descripcion}</div>
	      			
      			</div>
      		);

				} )}
			</div>
      	
    </div>
    
  );
  }
}

export default connect(mapStateToProps,{ getPosts })(Home);
