
import React from 'react';

import Navbar from './component/navbar/navbar';

export default  class App extends React.Component {
  render(){
    return (
      <div>
        <Navbar titulo="Marketplace" cor="orange"/>
        <div className="container">
          Conteúdo aqui
        </div>
      </div>
    )
  }
}
