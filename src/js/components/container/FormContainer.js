// import React, { Component } from "react";
// import ReactDOM from "react-dom";

// class FormContainer extends Component {
//   render() {
//     return <form id="search-form">Let's play Street Figther II !!!</form>;
//   }
// }
// export default FormContainer;
// const wrapper = document.getElementById("create-search-form");
// wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;

// import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import SearchBar from "./SearchBar"
// import ProductTable from "./ProductTable"

// class FormContainer extends Component { 

//   render() { 
//     let products = [
//       {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
//       {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
//       {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
//       {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
//       {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
//       {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
//     ];

//     return (
//       <form id="search-form">
//           <SearchBar />
//           <ProductTable products={products} />
//       </form>
//     );
//   }
// }
// export default FormContainer;
// const wrapper = document.getElementById("create-search-form");
// wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;

// 
import React, { Component } from "react";
import ReactDOM from "react-dom";
import SearchBar from "./SearchBar"
import ProductTable from "./ProductTable"

class FormContainer extends Component { 
  constructor() {
    super();
    let products = [
      {id:1, category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football", show: true},
      {id:2, category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball", show: true},
      {id:3, category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball", show: true},
      {id:4, category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch", show: true},
      {id:5, category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5", show: true},
      {id:6, category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7", show: true}
    ];    
    this.state = {
      products
    };
    
    this.onFilterStock = this.onFilterStock.bind(this);
    this.onFilterCategory = this.onFilterCategory.bind(this);
    this.onFilterName = this.onFilterName.bind(this);
  }
  onFilterStock (filter) {
    let { products } = this.state;    
    let newProducts = [...products];    
    if(filter)
    newProducts.forEach(product => {
      product.show = product.stocked
    });
    else
    newProducts.forEach(product => {
      product.show = true;
    });
    this.setState({products: newProducts})
  }
  onFilterCategory(value) {    
    let { products } = this.state;
    let newProducts = [...products];
    let searchVal = value.toUpperCase();

    if (value = '')
      newProducts.forEach(product => {
        product.show = true;
      });
    else 
      newProducts.forEach(product => {        
        if (product.category.toUpperCase().startsWith(searchVal))
          product.show = true;
        else
          product.show = false;
      });
        
    this.setState({ products: newProducts })
  }

  onFilterName(value) {    
    let { products } = this.state;
    let newProducts = [...products];
    let searchVal = value.toUpperCase();

    if (value = '')
      newProducts.forEach(product => {
        product.show = true;
      });
    else 
      newProducts.forEach(product => {        
        if (product.name.toUpperCase().startsWith(searchVal))
          product.show = true;
        else
          product.show = false;
      });
        
    this.setState({ products: newProducts })
  }
  
  render() {
    let { products=[] } = this.state;    
    return (
      <form id="search-form">
        <SearchBar onFilterStock={this.onFilterStock} onFilterCategory={this.onFilterCategory } onFilterName={this.onFilterName}/>
        <ProductTable products={products.filter( product => product.show)} />
      </form>
    );
  }
}
export default FormContainer;
const wrapper = document.getElementById("create-search-form");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;