
import React from 'react';

import Navbar from './component/navbar/navbar';
import ListaProduto from './component/produtocard/listaproduto';

export default  class App extends React.Component {
  render(){
    return (
      <div>
        <Navbar titulo="Marketplace" cor="orange"/>
        <div className="container">
          <ListaProduto/>
        </div>
      </div>
    )
  }
}
