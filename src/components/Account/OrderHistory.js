import React, {Component} from 'react';
import AccList from './AccList';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class OrderHistory extends Component{

    componentDidMount() {
        if (!this.props.user.id ) {this.props.history.push('/') }
      }

    render(){
        return(
            <div>
                <AccList/>
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

export default connect(mapStatetoProps, mapDispatchtoProps)(withRouter(OrderHistory));