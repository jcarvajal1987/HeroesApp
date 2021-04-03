import React from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'

export const Navbar = ({value}) => {

  
  
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        key="/marvel"
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        as={NavLink}
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        key="/dc"
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/dc"
                        as={NavLink}
                    >
                        DC
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                <button
                className="btn btn-primary"
                onClick={ ()=> value()}
            >

            Logout
            </button>
                </ul>
            </div>
        </nav>
    )
}