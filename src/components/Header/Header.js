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
                        <h2>BackCountry</h2> <input placeholder="Search" onChange={(e) => this.setState({ searchBar: e.target.value })} /> 
                        </div>

                        <div className="headRight">
                        <h4>Welcome Jared</h4> Cart Logo
                        </div>

                        </div>
                        <hr></hr>
                        <ul className="navigation">
                            <li className="nav-item">Men</li>
                            <li className="nav-item">Women</li>
                            <li className="nav-item">Brands</li>
                            <li className="nav-item">Activity</li>
                            <li className="nav-item">Contact Us</li>
                            {/* <Link className="nav-item"/>
                            <Link className="nav-item"/>
                            <Link className="nav-item"/>
                            <Link className="nav-item"/>
                            <Link className="nav-item"/> */}
                        </ul>
                    </div>
               
        )
    }
}

export default Header;