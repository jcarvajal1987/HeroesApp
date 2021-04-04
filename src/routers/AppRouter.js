import React from 'react'
import '../styles.css';
import {
    Switch,
    Route,
    useLocation,
    withRouter

  } from "react-router-dom";
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { TransitionGroup, CSSTransition } from 'react-transition-group'


const AppRouter = ({location}) => {

    const currentKey = location.pathname.split('/')[1] || '/'
    const timeout = { enter: 300, exit: 200 }
    

    
    console.log(location.pathname)

    return (
            <div>
            <TransitionGroup >

                <CSSTransition
                timeout={timeout}
                classNames='page'
                key={currentKey}
                appear
                >
                
                    <Switch location={location}>
                 
                        <Route  exact path="/" component={ LoginScreen }/>
                        
                        <Route path="/dash" component={ DashboardRoutes }/>
                    
                    </Switch>

                    </CSSTransition>

            </TransitionGroup>
            
            </div>
        
    )
}


export default withRouter(AppRouter)