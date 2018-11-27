import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Account.css';


class AccList extends Component{

    render(){
        return(
            <div className="AccList">

            <ul className="list">
                <Link to='/account'><li>Account Settings</li></Link>
                <Link to='/account/wish-list'><li>Wish List</li></Link>
                <Link to='/account/order-history'><li>Order History</li></Link>
            </ul>
            </div>
        )
    }

}

export default AccList; 