import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//COMPONENTES
import Clientes from './components/Clientes';
import NuevoCliente from './components/NuevoCliente';
import Cliente from './components/Cliente';

import clienteAxios from './config/axios';

function App() {

  //STATE DE LA APP
  const [listado, guardarCliente] = useState([]);

  useEffect( () => {
    const consultarAPI = () => {
      clienteAxios.get('/api/clientes')
        .then(respuesta => {
          //COLOCAR EN EL STATE EL RESULTADO
          guardarCliente(respuesta.data);
        })
        .catch(error => {
          console.log(error)
        })  
    }
    consultarAPI();
  }, [] );

  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          component={() => <Clientes listado={listado}/>}
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
