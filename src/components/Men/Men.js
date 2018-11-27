//Be sure to create a seperate folder to house the reusable component that will be used to display all products

import React, {Component} from 'react';
import axios from 'axios';
import './Men.css';
import {connect} from 'react-redux';
import { updateCart } from './../../ducks/reducer';

class Men extends Component{
    constructor(){
        super();
        this.state = {
            productsArr: []
        }
    }

     componentDidMount = async () => {
        await axios.get(`/api/clothing/mens`)
        .then( (res) => {
            this.setState({productsArr: res.data},
                
                
                )
        } )
        .catch( (err) => {console.log(err)});
    }



    addToCart = () => {};





    render(){

        let products = '';

       if (this.state.productsArr === []) { 

     products = <p>Nothing Rendered</p>
}
else{
    products = this.state.productsArr.map( (obj, index) => {
        return(
            <div key={index} className="prodBox">

                <img src={obj.image_url} alt='' className="prodBoxImg" />
                <p className="prodBoxName">{obj.product_name}</p>
                <p className="prodBoxPrice">${obj.price}</p>
                <button>Add to Cart</button>

            </div>
        )
    } )
}

        return(
            <div className="page">
                <div className="buffer"></div>

                {products}
            </div>
        )
    }
}


const mapDispatchtoProps = {
    updateCart
}

const mapStatetoProps = (state) => {
    return {
        cart: state.cart,
        user: state.user
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Men);