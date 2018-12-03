import React, {Component} from 'react';
import backGround from './../../images/Home/HHR.jpg';
import './Home.css';


class Home extends Component{
    render(){
        return(
            <div className="Home">
                <img src={backGround} alt=''/>  

                
                <br></br>
               
            </div>
        )
    }
}

export default Home;