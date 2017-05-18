import React, { Component } from 'react';
export default class ProdutoCard extends Component {

  render () {
    return (
      <div className="card sticky-action">
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src={this.props.produto.imagem} alt=""/>
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">{this.props.produto.nome}<i className="material-icons right">more_vert</i></span>
            <p>{this.props.produto.preco}</p>
            <p><a href="#">link</a></p>
          </div>
          <div className="card-action">
            <p><a href="#">link</a></p>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">{this.props.produto.nome}<i className="material-icons right">close</i></span>
            <p>{this.props.produto.descricao}</p>
          </div>
      </div>
    );
  }
}
