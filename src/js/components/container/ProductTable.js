import React, { Component } from "react";
import ReactDOM from "react-dom";
class ProductTable extends Component {
//   constructor() {
//     super();
//   }
  render() {
    let {products} = this.props;
    return (
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Category</th>  
            <th scope="col">Price</th>
            <th scope="col">Name</th>
          </tr>
        </thead>
        <tbody>
            {products.map( product => (
                <tr>
                    <td>{product.category}</td>
                    <td>{product.price}</td>
                    <td>{product.name}</td>
                </tr>
            ))}
        </tbody>
      </table>
    );
  }
}
export default ProductTable;