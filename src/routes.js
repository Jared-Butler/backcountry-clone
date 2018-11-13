import React from 'react';
import {Switch, Route, HashRouter} from 'react-router-dom';

import Home from './components/Home/Home';



export default(
    <HashRouter>
    <Switch>
        <Route exact path='/' component={Home} />
    </Switch>
    </HashRouter>
)