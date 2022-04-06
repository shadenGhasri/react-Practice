import "./product.css"
import {Component} from 'react';
class Product extends Component {
    state = {
        count : 0
      } 
    render() { 
        const {productName} = this.props
        return (
            <div>
                <span className='m-2 text-info'>{productName}</span>
                <span className='m-2 badge bg-primary'>{this.format()}</span>
                <button onClick={this.handleIncrement} className='m-2 btn btn-sm btn-success'>+</button>
                <button onClick={this.handleDecrement} className='m-2 btn btn-sm btn-warning'>-</button>
                <button className='m-2 btn btn-sm btn-danger'>delete</button>
            </div>
        );
    }
    format(){
        if(this.state.count === 0){
            return "zero"
        }else{
            return this.state.count;
        }
    }
    handleIncrement = ()=>{
        const {count} = this.state
        this.setState({
            count : count +1 
        });
    }
    handleDecrement = ()=>{
        const {count} = this.state
        this.setState({
            count : count -1
        });
    }
}
 
export default Product;
