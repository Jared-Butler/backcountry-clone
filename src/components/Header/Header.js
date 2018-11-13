import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {
    constructor() {
        super();
        this.state = {
            searchBar: ''
        }
    }


    render() {
        return (
            
                    <div className="header">
                        <div className="upperHeader">

                        <div className="headLeft">
                        <Link to='/'><h2>BackCountry</h2></Link> <input placeholder="Search" onChange={(e) => this.setState({ searchBar: e.target.value })} /> 
                        </div>

                        <div className="headRight">
                        <h4>Welcome Jared</h4> Cart Logo
                        </div>

                        </div>
                        <hr></hr>
                        <ul className="navigation">
                            <Link to='/men'><li className="nav-item">Men</li></Link>
                            <Link to='/women'><li className="nav-item">Women</li></Link>
                            <Link to='/brand'><li className="nav-item">Brands</li></Link>
                            <Link to='/activity'><li className="nav-item">Activity</li></Link>
                            <Link to='/contact-us'><li className="nav-item">Contact Us</li></Link>
                        </ul>
                    </div>
            
               
        )
    }
}

export default Header;