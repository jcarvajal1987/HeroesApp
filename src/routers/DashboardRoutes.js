import React from 'react'
import { Navbar } from '../components/ui/Navbar'
import { Redirect, Route, Switch, useLocation } from 'react-router'

import { HeroScreen } from '../components/heroes/HeroScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { DcScreen } from '../components/dc/DcScreen'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

export const DashboardRoutes = () => {

    const location = useLocation();
    return (
        <>
           <Navbar/> 
           <div>
           <TransitionGroup>

                <CSSTransition
                timeout={1000}
                className='fade'
                key={location.key}
                >
               <Switch location={location}>
                   <Route exact path="/marvel" component={ MarvelScreen} />
                   <Route exact path="/marvel/:heroeId" component={ HeroScreen} />
                   <Route exact path="/dc" component={ DcScreen } />

                   <Redirect to="/marvel" />
               </Switch>

               </CSSTransition>

            </TransitionGroup>
           </div>
        </>
    )
}
