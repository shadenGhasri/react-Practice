import "./product.css"
import {Component} from 'react';
class Product extends Component {
    // state = {  } 
    render() { 
        return (
            <>
                <span className='m-2 text-info'>Product Name</span>
                <span className='m-2 badge bg-primary'>2</span>
                <button className='m-2 btn btn-sm btn-success'>+</button>
                <button className='m-2 btn btn-sm btn-warning'>-</button>
                <button className='m-2 btn btn-sm btn-danger'>delete</button>
            </>
        );
    }
}
 
export default Product;
