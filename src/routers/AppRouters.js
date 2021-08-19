import React from 'react'
import {Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Login from '../components/Login'
import Registro from '../components/Registro'

const AppRouters = () => {
    return (
        <Router>
          <Switch> 

              <Route exact path="/" component={Login} />
              <Route exact path="/registro" component={Registro} />



          </Switch>
        </Router>
    )
}

export default AppRouters
