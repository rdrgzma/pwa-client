import React from 'react';

import NavMenu from './navmenu';

export default class Navbar extends React.Component {
  render(){

    let menu=[
      {titulo: "Home", link: "#home"},
      {titulo: "Perfil", link: "#perfil"},
      {titulo: "Produtos", link: "#produtos"},
      {titulo: "Carrinho", link: "#Carrinho"}
    ]

    let corNav="nav-wrapper "+this.props.cor;

    return (
       <nav className={this.props.cor}>
           <div className="container">
             <div className={corNav} >
               <a href="#!" className="brand-logo">{this.props.titulo}</a>
               <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
               <ul className="right hide-on-med-and-down">
                 <NavMenu menu={menu}/>
               </ul>
               <ul className="side-nav" id="mobile-demo">
                 <NavMenu menu={menu}/>
               </ul>
             </div>
           </div>
       </nav>
     );
  }
}
