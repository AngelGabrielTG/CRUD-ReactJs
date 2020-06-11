import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Clientes = ({listado}) => {
    if(listado.length === 0) return null;
    return ( 
        <Fragment>
            <section className="container">
                <div className="row btn-registro">
                    <Link to={'/nuevo'} className="waves-effect waves-light btn"><i className="material-icons right">input</i>REGISTRAR</Link>
                </div>
                <div className="row">
                    <table className="highlight centered responsive-table z-depth-1">
                        <thead>
                        <tr>
                            <th>NOMBRE</th>
                            <th>APELLIDO</th>
                            <th>EMAIL</th>
                            <th>FECHA</th>
                            <th>OPCIONES</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            listado.map(list => (
                                <tr key={list.id}>
                                    <td>{list.nombre}</td>
                                    <td>{list.apellido}</td>
                                    <td>{list.email}</td>
                                    <td>{list.createAt}</td>
                                    <td>
                                        <div className="btn-group" role="group">
                                            <button className="btn waves-effect waves-light green" type="submit" name="action">EDITAR
                                                <i className="material-icons right">edit</i>
                                            </button>
                                            <button className="btn waves-effect waves-light red" type="submit" name="action">ELIMINAR
                                                <i className="material-icons right">delete</i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>    
                </div>
            </section>
        </Fragment>
    );
}
 
export default Clientes;