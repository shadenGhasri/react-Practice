import React, { Component } from 'react';
import Product from './product';

class Products extends Component {
    state = {  } 
    render() { 
        return (
            <>
                <Product productName ="laptop"/>
                <Product productName ="phone"/>

            </>
        );
    }
}
 
export default Products;