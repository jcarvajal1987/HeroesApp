import React from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
export const LoginScreen = ({value}) => {
    

    return (
        <div className="container mt-5">
            <h1>Login Screen</h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={ ()=> value()}
            >

            Login
            </button>
            <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>
        </div>
        
    )
}
