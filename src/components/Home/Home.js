import React, {Component} from 'react';
import backGround from './../../images/Home/HHR.jpg';
import './Home.css';


class Home extends Component{
    render(){
        return(
            <div className="Home">
                <img src={backGround} alt=''/>  

                <div>
Shop by Category
                </div>
                <br></br>
                <div>
                    Bottom Menu
                </div>
                <div>
                    Footer
                </div>
            </div>
        )
    }
}

export default Home;