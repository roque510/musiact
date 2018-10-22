import React    from "react";
import template from "./Add.jsx";
import {database} from "../Firebase";
import swal from "sweetalert2";

class Add extends React.Component {
  constructor(){
    super();

    this.push = this.push.bind(this);
  }
  push(e){
    e.preventDefault();

    let TITULO = this.titulo.value;
    let DESC = this.desc.value;
    let FOTO = this.foto.value;
    let URL = this.url.value;

    database.push({
      contador:0,
      titulo: TITULO,
      foto: FOTO,
      descripcion: DESC,
      url: URL
    }, function(error) {
      if (error) {
        swal("Data could not be saved." + error);
      } else {
        swal({
          title: 'Data saved Succesfully',
          text: "Would you like to add another post?",
          type: 'success',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, another one!'
        }).then((result) => {
          if (result.value) {
            window.location = "/add";
          }
          else
            window.location = "/app";
        })

        
      }
    });

  }
  render() {
    return template.call(this);
  }
}

export default Add;
