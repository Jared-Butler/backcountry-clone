//Be sure to create a seperate folder to house the reusable component that will be used to display all products

import React, {Component} from 'react';
import axios from 'axios';
import './Men.css';
import {connect} from 'react-redux';
import { updateCart } from './../../ducks/reducer';
import Products from './ProdWindow';

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



  addToCart = async (product, user) => {
    const { product_id } = product;
    const { id } = user;
    if (!this.props.user.email) {
        //Add Material UI pop up here for a neater alert.
      alert('Please login to add items to your cart');
    } else {

      const cartArr = this.props.cart;
      let itemFound = false;
      for (let i = 0; i < cartArr.length; i++) {
        const currentProduct = cartArr[i];
        if (product_id === currentProduct.product_id) {
          itemFound = true;
        }
      }
      if (!itemFound) {
          //using axios call here to add new items to the database.
        let res = await axios.post(`/api/cart/add`, {
            product_id: product_id, 
            cust_id: id, 
            qty: 1
          })
          this.props.updateCart(res.data);
       
      } else {
          //using axios call here to update qty in database.
         let res = await axios.put(`/api/cart/add/one`,{
            product_id: product_id, 
            cust_id: id
          })
        this.props.updateCart(res.data);
      }
    }
  };





    render(){
        

        let products = '';

       if (this.state.productsArr.length === 0) { 

     return <p>Nothing Rendered</p>
}


    products = this.state.productsArr.map( (obj, index) => {
        return(
            
    <Products 
    key={obj.product_id}
    user={this.props.user}
    addToCart={this.addToCart}
    obj={obj}
    index={index}
    />
        )
    } )





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