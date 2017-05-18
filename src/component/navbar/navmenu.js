import React from 'react';

export default class NavMenu extends React.Component {
  render(){
    let lista=this.props.menu.map(function(obj){
      return(
        <li key={obj.titulo}><a href={obj.link}>{obj.titulo}</a></li>
      );
    });
    return (<div>
      {lista}
    </div>)
  }

}
