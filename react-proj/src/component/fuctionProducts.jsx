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
                <Product key={item.id} productName= {item.productName} count={item.count}/>
            )
            )}
        </>
     );
}
 
export default Products;
