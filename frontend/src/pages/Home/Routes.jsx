import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Main from '../../components/Template/Main'

export default props => 
    <Switch>
        <Route exact path='/' component={Main} />
        <Redirect from='*' to='/home' />
    </Switch>
