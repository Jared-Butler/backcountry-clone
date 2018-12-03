import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import headerLogo from "./../../images/Home/logo.svg";
import './Footer.css';

class Footer extends Component{
   

    render(){
        return(
            <div className="footer">

            {/* <button onClick={() => console.log(this.props.user)}>Click Me</button> */}

         
                <div className="upperHeader">

                

                    <div className="headLeft">
                    <Link to='/'><img className="headerLogo2" src={headerLogo} alt ="" /></Link>
                        <Link to='/' className="headerTitle">HighCountryProducts.com</Link>
                        
                    </div>

                    <div className="headRight">

                     
                        </div>

                </div>
               
            </div>
        )
    }


};

export default Footer;