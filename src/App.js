
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Drawer from 'material-ui/Drawer';
import { Link} from 'react-router';
import ListaAnuncio from './component/anuncio/listaanuncio';



export default  class App extends React.Component {
  constructor(){
    super();
    this.state={
      drawerOpened: false
    }
  };

  toggleDrawer(){
    this.setState({
        drawerOpened: !this.state.drawerOpened
      });
  };
  render(){
    return (
      <MuiThemeProvider>
        <div>
        <AppBar title="Marketplace"onLeftIconButtonTouchTap={()=>this.toggleDrawer()}>
          <Drawer open={this.state.drawerOpened} docked={false} onRequestChange={()=>this.toggleDrawer()}>
            <List>
              <ListItem
                        disabled={true}
                        leftAvatar={
                          <Avatar src="http://www.material-ui.com/images/uxceo-128.jpg" />
                        }
                      >
                        Usuario
                      </ListItem>
              <ListItem>
                <Link to="/">Catalago</Link>
              </ListItem>
              <ListItem>
                <Link to="/cadastroanuncio">Cadastrar Anuncio</Link>
              </ListItem>
            </List>
          </Drawer>
        </AppBar>
          <h2>Anuncios</h2>
          <ListaAnuncio/>
        </div>
      </MuiThemeProvider>
    )
  }
}
