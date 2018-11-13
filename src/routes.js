import React from 'react';
import {Switch, Route, HashRouter} from 'react-router-dom';

import Home from './components/Home/Home';
import Account from './components/Account/Account';
import Activity from './components/Activity/Activity';
import Brand from './/components/Brand/Brand';
import Cart from './components/Cart/Cart';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import Men from './components/Men/Men';
import Women from './components/Women/Women';



export default(
    <HashRouter>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/account' component={Account} />
        <Route path='/activity' component={Activity} />
        <Route path='/brand' component={Brand} />
        <Route path='/cart' component={Cart} />
        <Route path='/contact-us' component={Contact} />
        <Route path='/login' component={Login} />
        <Route path='/men' component={Men} />
        <Route path='/women' component={Women} />
    </Switch>
    </HashRouter>
)