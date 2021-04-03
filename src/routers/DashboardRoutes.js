import React from 'react'
import { Navbar } from '../components/ui/Navbar'
import { BrowserRouter as Router, Route, Link, NavLink, Redirect, useHistory } from 'react-router-dom'

import { HeroScreen } from '../components/heroes/HeroScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { DcScreen } from '../components/dc/DcScreen'
import { TransitionGroup, CSSTransition } from 'react-transition-group'



export const DashboardRoutes = ({value}) => {
  

    
    
    return (
        <>
           <Router>
           <Navbar value={value} /> 
           

           <Route exact key="/marvel" path="/marvel">

            {({ match }) => (
                <CSSTransition
                in={match != null}
                timeout={300}
                classNames="page"
                unmountOnExit
                >
                    <div className="page">

                    <MarvelScreen/>
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

                    <DcScreen/>
                    </div>
                </CSSTransition>
            )}
            </Route>
            
            



                   {/* <Route key="/otro"  path="/marvel/:heroeId" component={ HeroScreen} /> */}
                   

                   {/* <Redirect to="/marvel" /> */}
               

            
           </Router>
        </>
    )
}
