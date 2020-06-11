import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//COMPONENTES
import Clientes from './components/Clientes';
import NuevoCliente from './components/NuevoCliente';
import Cliente from './components/Cliente';

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          component={Clientes}
        />

        <Route
          exact
          path="/nuevo"
          component={NuevoCliente}
        />

        <Route
          exact
          path="/cliente/:id"
          component={Cliente}
        />
      </Switch>
    </Router>
  );
}

export default App;
