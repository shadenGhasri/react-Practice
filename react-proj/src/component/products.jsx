import React, { Component } from 'react';
import Product from './product';

class Products extends Component {
    state = { 
        products : [
            {id:1 , count:2 , productName:"laptop"},
            {id:2 , count:4 , productName:"phone"}
        ]
     } 
    render() { 
        return (
            <>
             {this.state.products.map((p,index)=>(
                 <Product onDelete = {this.handleDelete} key = {index} id = {p.id} count = {p.count} productName = {p.productName} />
             ))}
            </>
        );
    }

    handleDelete = (productId)=>{
     const newProducts =  this.state.products.filter(p => p.id !== productId );
     this.setState({products : newProducts})
    }
}
 
export default Products;