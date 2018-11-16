//This should display in an alphabetical order that brings you to a display similar to the Men's & Women's display but filtered to that activity.

import React, {Component} from 'react';
import axios from 'axios';

class Brand extends Component{
    constructor(){
        super();
        this.state={
            brands: []
        }
        // this.displayBrands = this.displayBrands.bind(this);
    }



    getAll = async() => { let res = await axios.get(`/product/brand/get-all`);
    this.setState({
        brands: res.data.map(obj => {let brand = []; brand = obj.brand; return brand } )
    })
}

componentDidMount(){this.getAll()};

   
// Brands = function displayBrands(){
//     this.state.brands.map(
//         (arr, i) => {return(
//             <li >hey</li>
//         )}
//     ) 
// }




    render(){
        const brandNames = this.state.brands
        const brands = brandNames.map((brand, i) => {return (<li key={i}>{brand}</li>)})
        return(
            <div>
                Brand Component

                
                <hr></hr>
               <ul>
               {brands}
               </ul>
            </div>
        )
    }
}

export default Brand;