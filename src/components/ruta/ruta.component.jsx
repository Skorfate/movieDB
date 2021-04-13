import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from '../../page/homePage/home.page'

const Ruta = () => {
    return (
        <Switch>
          <Route exact path='/' component={Home}/>          
        </Switch>
    )
}

export default Ruta

