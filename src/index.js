import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { Router, browserHistory, Route} from 'react-router';
import App from './App';
import Carrinho from './component/carrinho/carrinho';
import Pagamento from './component/pagamento/pagamento';
import CadastroAnuncio from './component/cadastroanuncio/cadastroanuncio';
injectTapEventPlugin();


ReactDOM.render(
  (
    <MuiThemeProvider>
        <Router history={browserHistory}>
          <Route path="/" component={App}/>
          <Route path="/cadastroanuncio" component={CadastroAnuncio}/>
          <Route path="/carrinho" component={Carrinho}/>
          <Route path="/pagamento" component={Pagamento}/>
        </Router>
  </MuiThemeProvider>

  ),
  document.getElementById('root')
);
