import "./Posts.css";
import React from "react";
import Helmet from 'react-helmet';

function template() {
  return (
    <div className="posts">

      {/* <Helmet>
        <title class="">{"Musicon | "+ this.props.post.titulo}</title>
        <meta property="og:title" content={this.props.post.titulo}/>
        <meta property="og:image" content={this.props.post.foto}/>
        <meta property="og:site_name" content={window.location.href}/>
        <meta property="og:description" content={this.props.post.descripcion} />

        <meta name="twitter:title" content={this.props.post.titulo} />
        <meta name="twitter:image" content={this.props.post.foto} />
        <meta name="twitter:site_name" content={window.location.href}/>
        <meta name="twitter:description" content={this.props.post.descripcion} />
        <meta name="twitter:card" content="summary_large_image" />

        <meta name="description" content={this.props.post.descripcion} />
      </Helmet> */}
      
      <div className="banner" onClick={() => {this.goto("http://superroque.fn.xyz")}}>
        <img src="http://successwithclever.com/wp-content/uploads/2016/02/FUTURE-NET-830x450.jpg" alt=""/>
      </div>
      <h1>{this.props.post.titulo}</h1>
      <p>{this.props.post.descripcion}</p>
      <iframe style={{width:'90vw',margin:'auto',height:"80vh", display:'flex', marginBottom:'20px'}} src={this.props.post.url} frameborder="0" allowfullscreen></iframe>
    </div>
  );
};

export default template;
