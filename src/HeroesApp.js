import React from 'react'
import {
    Router,
  } from "react-router-dom";
import { AppRouter } from './routers/AppRouter'
import { createBrowserHistory } from "history";



export const HeroesApp = () => {
    const history = createBrowserHistory();
    
    return (
        <Router history= {history}>
            <AppRouter/>
        </Router>
    )
}
