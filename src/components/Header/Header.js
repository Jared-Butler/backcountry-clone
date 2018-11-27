import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import headerLogo from "./../../images/Home/logo.svg";
import Input from '@material-ui/core/Input';
import 'typeface-roboto';
import IconButton from '@material-ui/core/IconButton';
import { SvgIcon } from '@material-ui/core';
import MobileDrawer from './MobileDrawer';
import Login from './../Login/Login'
import {connect} from 'react-redux';






class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchBar: ''
        }
    }


   
        //  styles = {
        //     width: '600px',
        //     marginTop: '10px',
        //     borderRadius: '5px'
        // }
    

        accountRender = () => {
            if (this.props.user.fName){
                return (
                    <div>
                   <Link to='/account'> Welcome {this.props.user.fName} </Link>

                

                    </div>
                )
            }
            else{return(<h4 className="account"><Login/></h4>)}
        }



    render() {
        return (
            <div className="header">

            {/* <button onClick={() => console.log(this.props.user)}>Click Me</button> */}

            <div className="Drawer">
            <MobileDrawer></MobileDrawer>
            </div>
                <div className="upperHeader">

                

                    <div className="headLeft">
                    <Link to='/'><img className="headerLogo" src={headerLogo} alt ="" /></Link>
                        <Link to='/' className="headerTitle">HighCountry</Link>
                        <Input className="searchBar" placeholder="Search"  onChange={(e) => this.setState({ searchBar: e.target.value })} />
                    </div>

                    <div className="headRight">

                        {/*This is where the conditional account rendering will come into place */}

                        {this.accountRender()}

                        <Link to="/cart"><IconButton><SvgIcon ><path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" id="svg_2"  fill="#ffffff" fillOpacity="1"/></SvgIcon></IconButton></Link>
                        </div>

                </div>
                <div className="lowerHeader">
                <hr></hr>
                <ul className="navigation">
                    <Link id="navLink" to='/men'><li className="nav-item">Men</li></Link>
                    <Link id="navLink" to='/women'><li className="nav-item">Women</li></Link>
                    <Link id="navLink" to='/brand'><li className="nav-item">Brands</li></Link>
                    <Link id="navLink" to='/activity'><li className="nav-item">Activity</li></Link>
                    <Link id="navLink" to='/contact-us'><li className="nav-item">Contact Us</li></Link>
                </ul>
                </div>
            </div>


        )
    }
}


const mapDispathtoProps = {
    
  }
// This is how to pull data from redux off of state.
  const mapStatetoProps = (state) => {
      return {
          user: state.user
      }
  }

export default connect(mapStatetoProps, mapDispathtoProps)(Header);