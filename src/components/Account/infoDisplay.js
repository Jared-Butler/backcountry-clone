import React, {Component} from 'react';
import {connect} from 'react-redux';

class CustInfo extends Component{

    addressRender = () => {
        if (this.props.user.add2)  
            {return(<ul>
                <li>Name: {this.props.user.fName} {this.props.user.lName}</li>
                <li>Street Address: {this.props.user.add1}</li>
                <li>State: {this.props.user.state}</li>
                <li>Zipcode: {this.props.user.zip}</li>
            </ul>)}
            
         
            else{return(<ul>
                <li>Name: {this.props.user.fName} {this.props.user.lName}</li>
                <li>Street Address: {this.props.user.add1}</li>
                <li>Address 2: {this.props.user.add2}</li>
                <li>State: {this.props.user.state}</li>
                <li>Zipcode: {this.props.user.zip}</li>
            </ul>)}
        
    };


    render(){
        return(
            <div>
             {this.addressRender()}
            </div>
        )
    }
}


const mapDispatchtoProps = {

}

const mapStatetoProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(CustInfo);