//Create seperate components in seperate folders to represent each view and render them here using a ternary to conditionally render different views for user/admin profiles.

import React, {Component} from 'react';
import AccList from './AccList';
import AddressInput from './AddAddress';
import CustInfo from './infoDisplay';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class Account extends Component{
  

    componentDidMount() {
      if (!this.props.user.id ) {this.props.history.push('/') };
    //   this.handleAddressRender();
    }

    handleAddressRender = () => {
        if(!this.props.user.add1){
            return(
                <AddressInput />
            )
        }
        else{
            return(
                <CustInfo />
            )
            }
    }
    

    
    render(){
        return(
            <div>

            <AccList/>
            
            {this.handleAddressRender()}
            {/* <AddressInput /> */}

            

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

export default connect(mapStatetoProps, mapDispatchtoProps)(withRouter(Account));