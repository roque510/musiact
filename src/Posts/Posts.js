import React    from "react";
import template from "./Posts.jsx";


import { getPost } from '../Actions/mainActions';
import { connect } from 'react-redux';


function mapStateToProps(state) {
  return {
    post: state.post
  };
}

class Posts extends React.Component {
  constructor(){
    super()

    this.goto = this.goto.bind(this);
  }

  goto(link){
    if(!link)
      return ""
    
    window.location = link;

  }
  componentWillMount(){
    this.props.getPost(this.props.match.params.id);
  }
  render() {
    return template.call(this);
  }
}

export default connect(mapStateToProps,{ getPost })(Posts);
