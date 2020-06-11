import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return ( 
        <Fragment>
            <header>
                <nav className="nav-wrapper">
                    <div className="container"> 
                        <Link to={'/'} className="brand-logo">CRUD - APIREST</Link>
                        <Link to={'/'} data-target="mobile-demo" className="sidenav-trigger">
                            <i className="material-icons">menu</i>
                        </Link>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><Link to={'/'}>01. INICIO</Link></li>
                            <li><Link to={'/'}>ANGEL GABRIEL</Link></li>
                        </ul>
                    </div>
                </nav>
            </header>

            <ul className="sidenav" id="mobile-demo">
                <li><Link to={'/'}>01. INICIO</Link></li>
                <li><Link to={'/'}>ANGEL GABRIEL</Link></li>
            </ul>
        </Fragment>
    );
}
 
export default Header;