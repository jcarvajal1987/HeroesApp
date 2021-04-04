import React from 'react'
import '../styles.css';
import {
    Switch,
    Route,
    useLocation

  } from "react-router-dom";
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { TransitionGroup, CSSTransition } from 'react-transition-group'


export const AppRouter = () => {

    const location = useLocation();

    console.log(location)

    return (
            <div>
            <TransitionGroup >

                <CSSTransition
                timeout={1000}
                className='fade'
                key={location.key}
                >
                
                    <Switch location={location}>
                 
                        <Route key={location.key}  exact path="/login" component={ LoginScreen }/>
                        
                        <Route key={location.key} path="/" component={ DashboardRoutes }/>
                    
                    </Switch>

                    </CSSTransition>

            </TransitionGroup>
            
            </div>
        
    )
}
