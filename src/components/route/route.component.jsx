import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom';

export class Route extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                </Switch>
            </div>
        )
    }
}

export default Route
