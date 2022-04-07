
import { useState } from "react";

const Product = ({productName ,count , id , onIncrement , onDecrement}) => {
    // const [counter , setCounter] = useState(count)
    return (
        
            <div>
                <span className='m-2 text-info'>{productName}</span>
                <span className='m-2 badge bg-primary'>{count}</span>
                <button onClick={handleIncrement} className='m-2 btn btn-sm btn-success'>+</button>
                <button onClick={handleDecrement} className='m-2 btn btn-sm btn-warning'>-</button>
                <button className='m-2 btn btn-sm btn-danger'>delete</button>
            </div>
        
    );
    function handleIncrement(){
        onIncrement(id)
    }

    function handleDecrement(){
        onDecrement(id)
    }

   
};
 
export default Product;