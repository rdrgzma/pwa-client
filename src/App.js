
import React from 'react';

import Navbar from './component/navbar/navbar';
import ProdutoCard from './component/produtocard/produtocard';

export default  class App extends React.Component {
  render(){
    return (
      <div>
        <Navbar titulo="Marketplace" cor="orange"/>
        <div className="container">
          <div className="row">
            <div className="col m3">
              <ProdutoCard/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
