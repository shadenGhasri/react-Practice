import { Component } from "react";
import Products from "./component/products";
import Navbar from "./component/navbar";

class App extends Component {
    // state = {  } 
    render() { 
        return (
            <><Products /><Navbar /></>
        );
    }
}
 
export default App;