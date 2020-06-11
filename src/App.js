import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//COMPONENTES
import Clientes from './components/Clientes';
import NuevoCliente from './components/NuevoCliente';
import Cliente from './components/Cliente';
import Header from './components/Header';

import clienteAxios from './config/axios';

function App() {

  //STATE DE LA APP
  const [listado, guardarCliente] = useState([]);
  const [consulta, guardarConsulta] = useState(true);

  useEffect( () => {
    if(consulta) {
      const consultarAPI = () => {
        clienteAxios.get('/api/clientes')
          .then(respuesta => {
            //COLOCAR EN EL STATE EL RESULTADO
            guardarCliente(respuesta.data);

            //DESABILITAR LA CONSULTA
            guardarConsulta(false);
          })
          .catch(error => {
            console.log(error)
          })  
      }
      consultarAPI();
    }
  }, [consulta] );

  return (
    <Router>
      <Header />
      <Switch>
        <Route
          exact
          path="/"
          component={() => <Clientes listado={listado}/>}
        />

        <Route
          exact
          path="/nuevo"
          component={() => <NuevoCliente guardarConsulta={guardarConsulta}/>}
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
