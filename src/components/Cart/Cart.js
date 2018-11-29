import React, {Component} from 'react';
import './Cart.css';
import {connect} from 'react-redux';
import { updateCart } from './../../ducks/reducer';
import Products from './prodWindow';
import axios from 'axios';

class Cart extends Component{
    constructor(){
        super();
        this.state = {
            productsArr: []
        }
    }

    componentDidMount = async () => {
        //finish setting up an on render set state method for the cart
        if (this.props.user.id)
           {this.populateCart()}
        
    };

    populateCart = async () => {
        let res = await axios.get(`/api/cart/${this.props.user.id}`)
        this.props.updateCart(res.data)
        await this.setState({productsArr: this.props.cart})
    }

    // addOne = async (product, user) => {
    //     const { product_id } = product;
    //     const { id } = user;

    //     let res = await axios.put(`/api/cart/addone`,{
    //         product_id: product_id, 
    //         cust_id: id
    //       })
    //     this.props.updateCart(res.data);
    // }

    // minusOne = async (product, user) => {
    //     const { product_id } = product;
    //     const { id } = user;
    //     console.log('Clicked');
    //     let res = await axios.put(`/api/cart/minusone`,{
    //         product_id: product_id, 
    //         cust_id: id
    //       })
    //     this.props.updateCart(res.data);
    // }

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
    // add={this.addOne()}
    // minus={this.minusOne()}
    obj={obj}
    index={index}
    />
        )
    } )





        return(
            <div className="page">
            {() => this.componentDidMount()}

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

export default connect(mapStatetoProps, mapDispatchtoProps)(Cart);