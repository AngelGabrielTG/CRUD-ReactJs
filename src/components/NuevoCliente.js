import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import clienteAxios from '../config/axios';

const NuevoCliente = (props) => {

    //GENERAR STATE COMO OBJETO
    const [listado, guardarCliente] = useState({
        nombre: '',
        apellido: '',
        email: '',
        createAt: ''
    });

    //LEA LOS DATOS DEL FORMULARIO
    const actualizarState = e => {
        guardarCliente({
            ...listado,
            [e.target.name] : e.target.value
        })
    }

    //ENVIAR UNA PETICION A LA API
    const crearNuevoCliente = e => {
        e.preventDefault();

        //ENVIAR LA PETICION POR AXIOS
        clienteAxios.post('/api/clientes', listado)
            .then(respuesta => {
                console.log(respuesta);

                props.guardarConsulta(true);

                //REDIRECCIONAR
                props.history.push('/')
            })
    }

    return ( 
        <Fragment>
            <section className="container">
                <div className="row btn-registro">
                    <Link to={'/'} className="waves-effect waves-light btn"><i className="material-icons right">arrow_back</i>REGRESAR</Link>
                </div>

                <div className="row">
                    <div className="col s12">
                        <h5>
                            <div className="card-panel center">
                                <span className="blue-text">FORM REGISTRO</span>
                            </div>
                        </h5>
                        <form onSubmit={crearNuevoCliente}>
                            <div className="row">
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">person</i>
                                    <input type="text" id="autocomplete-input" className="autocomplete" 
                                    name="nombre" onChange={actualizarState}/>
                                    <label htmlFor="autocomplete-input">Nombre</label>
                                </div>
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">person</i>
                                    <input type="text" id="autocomplete-input" className="autocomplete" 
                                    name="apellido" onChange={actualizarState}/>
                                    <label htmlFor="autocomplete-input">Apellido</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">email</i>
                                    <input id="email_inline" type="email" className="validate" 
                                    name="email" onChange={actualizarState}/>
                                    <label htmlFor="email_inline">Email</label>
                                    <span className="helper-text" data-error="incorrecto" data-success="correcto">example@gmail.com</span>
                                </div>
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">event</i>
                                    <input type="text" className="datepicker" 
                                    name="createAt" onChange={actualizarState}/>
                                    <label htmlFor="autocomplete-input">Fecha</label>
                                </div>
                            </div>
                            <div className="row center">
                                <button className="btn waves-effect waves-light orange" type="submit" name="action">Guardar
                                    <i className="material-icons right">input</i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}
 
export default withRouter(NuevoCliente);