import "./Add.css";
import React from "react";

function template() {
  return (
    <div className="add">
    <form onSubmit={this.push}>
      <div class="row container" style={{marginBottom:'0px',marginTop:'100px'}}>
        <div class="row container">
      <div class="input-field col s12 m6">
        <i class="material-icons prefix">image</i>
        <input id="Foto" name="Foto" type="tel" class="validate" ref={el => this.foto = el}/>
        <label for="Foto">Foto</label>
      </div>
      <div class="input-field col s12 m6">
        <i class="material-icons prefix">web</i>
        <input id="Url" name="Url" type="tel" class="validate" ref={el => this.url = el} />
        <label for="Url">Url</label>
      </div>
    </div>
 


</div>
<div class="row container">
<div class="input-field col s12">
        <i class="material-icons prefix">account_circle</i>
        <input id="Nombre" name="Nombre" type="text" class="validate" ref={el => this.titulo = el}/>
        <label for="Nombre">Nombre</label>
      </div>
</div>      

<div class="row container">
        <div class="row">
      <div class="input-field col s12">
      <i class="material-icons prefix">home</i>
        <textarea id="desc" name="desc" class="materialize-textarea" ref={el => this.desc = el}></textarea>
        <label for="desc">Descripcion</label>
      </div>
    </div>
</div>


<div class="row container">
  <button id="send" class="btn waves-effect waves-light right" type="submit" name="action">Save
      
    </button>		
</div>
</form>
    </div>
  );
};

export default template;
