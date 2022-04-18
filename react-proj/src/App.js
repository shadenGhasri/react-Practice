import { Component } from "react";
import Products from "./component/products";
import Navbar from "./component/navbar";

class App extends Component {
    state = {
        products: [
          { id: 1, count: 2, productName: "laptop" },
          { id: 2, count: 1, productName: "phone" },
          { id: 3, count: 4, productName: "airpods" },
        ],
      }; 
    render() { 
        return (
            <>
                <Navbar products={this.state.products}/>
                <Products />
            </>
        );
    }
}
 
export default App;