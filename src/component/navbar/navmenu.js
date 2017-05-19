import React from 'react';
import {Link} from 'react-router';

export default class NavMenu extends React.Component {
  render(){

    return (
      <div>
        <li><Link to="/">Catalago</Link></li>
          <li><Link to="/cadastroanuncio">Cadastrar Anuncio</Link></li>
      </div>
    )
  }

}
