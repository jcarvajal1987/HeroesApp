import React from 'react'
import '../styles.css';
import { BrowserRouter as Router, Route, Link, NavLink, useHistory, Redirect } from 'react-router-dom';
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { Historia } from './Historia';


export const AppRouter = () => {

    const {handleLogin,handleLogout} = Historia();

    return (
        
            <>
                
                <Route exact key="/login" path="/login" >
                        {({ match }) => (
                            <CSSTransition 
                            in={match != null}
                            timeout={300}
                            classNames="page"
                            unmountOnExit
                            >
                            <div className="page">
                            
                                <LoginScreen value={handleLogin} />
                            </div>
                            </CSSTransition>
                        )}
                    </Route>

                    <Route exact key="/marvel" path="/marvel">

                        {({ match }) => (
                            <CSSTransition
                            in={match != null}
                            timeout={300}
                            classNames="page"
                            unmountOnExit
                            >
                            <div className="page">
                                <DashboardRoutes value={handleLogout}/>
                            </div>
                            </CSSTransition>
                        )}
                        </Route>

                        <Route exact key="/dc" path="/dc">

                        {({ match }) => (
                            <CSSTransition
                            in={match != null}
                            timeout={300}
                            classNames="page"
                            unmountOnExit
                            >
                                <div className="page">
                                <DashboardRoutes value={handleLogout}/>
                            </div>
                            </CSSTransition>
                        )}
                        </Route>

                        <Route exact key="/" path="/">

                        {({ match }) => (
                            <CSSTransition
                            in={match != null}
                            timeout={300}
                            classNames="page"
                            unmountOnExit
                            >
                                <div className="page">
                                <DashboardRoutes value={handleLogout}/>
                            </div>
                            </CSSTransition>
                        )}
                        </Route>

                        
                        

                        
                        
                        
                        
                        
                    
                    

                    
            </>
            
    )
}
