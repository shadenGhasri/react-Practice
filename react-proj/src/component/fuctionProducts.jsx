import Product from "./functionProduct";
import { useState } from "react";

const Products = () => {
    const [products , setProducts] = useState([
        {id:1 , count: 2 , productName: "laptop"},
        {id:2 , count: 3 , productName: "phone"}
    ]);
    return ( 
        <>
            {products.map(item=>(
                <Product onIncrement = {handleIncrement} onDecrement = {handleDecrement} key={item.id} productName= {item.productName} count={item.count}/>
            )
            )}
        </>
     );
     function handleIncrement(productID){
        const newProducts = [...this.state.products]
        const index = newProducts.findIndex(p=> p.id === productID) 
        newProducts[index].count += 1;
        setProducts(newProducts)
    }
    function handleDecrement(productID){
        const newProducts = [...this.state.products]
        const index = newProducts.findIndex(p=> p.id === productID) 
        newProducts[index].count += 1;
        setProducts(newProducts)
    }
}
 
export default Products;
