import React, { Component } from 'react';
export default class ProdutoCard extends Component {
  render () {
    return (
      <div className="card">
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src="http://materializecss.com/images/office.jpg" alt=""/>
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">Produto<i className="material-icons right">more_vert</i></span>
            <p>R$ 1,00</p>
            <p><a href="#">link</a></p>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">Produto<i className="material-icons right">close</i></span>
            <p>Aqui está a descrição do produto.</p>
          </div>
      </div>
    );
  }
}
