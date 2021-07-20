import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import IndexPage from '../containers/Index'
import path from './path'

export const Routes=()=>{
    return(
        <Router>
            <Route exact path={path.index} component={IndexPage}/>
        </Router>
    )
}