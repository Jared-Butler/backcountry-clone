//Create seperate components in seperate folders to represent each view and render them here using a ternary to conditionally render different views for user/admin profiles.

import React, {Component} from 'react';
import AccList from './AccList';
import AddressInput from './AddAddress';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class Account extends Component{
  

    componentDidMount() {
      if (!this.props.user.id ) {this.props.history.push('/') }
    }

    handleAddressRender() {

    }
    

    
    render(){
        return(
            <div>

            <AccList/>
            
            <AddressInput />

            

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