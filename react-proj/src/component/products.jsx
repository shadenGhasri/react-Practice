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
             <button onClick={this.handleIReset} className='m-2 btn btn-sm btn-success'>Reset</button>
             {this.state.products.map((p,index)=>(
                 <Product  onIncrement = {this.handleIncrement} onDecrement = {this.handleDecrement} onDelete = {this.handleDelete} key = {index} id = {p.id} count = {p.count} productName = {p.productName} />
             ))}
            </>
        );
    }
    handleIncrement = (productID)=>{
        const newProducts = [...this.state.products]
        const index = newProducts.findIndex(p=> p.id === productID) 
        newProducts[index].count += 1;
        this.setState({products : newProducts})
    }

    handleDecrement = (productID)=>{
        const newProducts = [...this.state.products]
        const index = newProducts.findIndex(p=> p.id === productID) 
        newProducts[index].count -= 1;
        this.setState({products : newProducts})
    }

    handleDelete = (productId)=>{
     const newProducts =  this.state.products.filter(p => p.id !== productId );
     this.setState({products : newProducts})
    }

    handleIReset = ()=>{
       const newProducts = this.state.products.map(p=>{
            p.count = 0 ;
            return p;
        });
        this.setState({products : newProducts})
    }
}
 
export default Products;