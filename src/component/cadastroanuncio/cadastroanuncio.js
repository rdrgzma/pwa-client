import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Navbar from './../navbar/navbar';
export default class CadastroAnuncio extends Component {
  render () {
    return (
      <div>
            <Navbar titulo="Marketplace" />
              <h2>Cadastro de anuncios</h2>
              <div className="row">
                  <div className="col s12">
                    <div className="row">
                      <div className="input-field ">
                        <input placeholder="Título do anuncio" id="titulo" type="text" className="validate"/>
                      </div>
                      <div className="input-field ">
                        <input placeholder="Descreva o seu anuncio"id="descricao" type="text" className="validate"/>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <input placeholder="Preço"id="preco" type="text" className="validate"/>
                    </div>
                  </div>
                </div>

                  <RaisedButton label="Default" />
                  <RaisedButton label="Primary" primary={true}  />
                  <RaisedButton label="Secondary" secondary={true} />
          </div>
    </div>
    );
  }
}
