import React from 'react'
import { Navbar } from '../components/ui/Navbar'
import { Redirect, Route, Switch, useLocation } from 'react-router'

import { HeroScreen } from '../components/heroes/HeroScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { DcScreen } from '../components/dc/DcScreen'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

export const DashboardRoutes = ({location,match }) => {

    const currentKey = location.pathname.split('/')[1] || '/'
    const timeout2 = { enter: 300, exit: 200 }

    
    return (
        <>
           <div>
           <Navbar match={match}/> 
           <TransitionGroup >

                <CSSTransition
                timeout={300}
                classNames='page'
                key={location.pathname}
                
                >
           
               <Switch location={location}>
                    
                   <Route path={`${match.url}/marvel`} component={ MarvelScreen} />
                   {/* <Route exact path="/marvel/:heroeId" component={ HeroScreen} /> */}
                   <Route path={`${match.url}/dc`} e component={ DcScreen } />

                   <Redirect to={`${match.url}/marvel`} />
               </Switch>

               </CSSTransition>

            </TransitionGroup>

              
           </div>
        </>
    )
}
