import React, { Component } from 'react';
import {Card} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';


export default class AnuncioCard extends Component {

  render () {
    return (

      <div>
          <Card>
            <div className="card sticky-action">
            <div className="card-image waves-effect waves-block waves-light">
              <img className="activator" src={this.props.anuncio.imagem} alt=""/>
            </div>
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">{this.props.anuncio.nome}<i className="material-icons right">more_vert</i></span>
              <p>{this.props.anuncio.preco}</p>
              <p><a href="#">link</a></p>
            </div>
            <div className="card-action">
              <p><a href="#">link</a></p>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">{this.props.anuncio.nome}<i className="material-icons right">close</i></span>
              <p>{this.props.anuncio.descricao}</p>
            </div>
        </div>
      <RaisedButton label="Salvar" primary={true} />
      <RaisedButton label="Cancelar" secondary={true} />
          </Card>
        </div>
  );

  }
}
