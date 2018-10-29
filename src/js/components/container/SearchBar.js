// import React, { Component } from "react";
// import ReactDOM from "react-dom";
// class SearchBar extends Component {
//   constructor() {
//     super();   
//   }
//   render() {
//     return (
//       <form>
//         <input type="search" placeholder="Search..." />
//         <label>
//           <input type="checkbox" />
//           Only show products in stock
//         </label>
//       </form>
//     );
//   }
// }
// export default SearchBar;

import React, { Component } from "react";
import ReactDOM from "react-dom";
class SearchBar extends Component {
  render() {
    let { onFilterStock, onFilterCategory, onFilterName } = this.props;
    return (
      <div>
        <input type="search" placeholder="Search..." onChange={ e => { onFilterCategory && onFilterCategory(e.target.value)}}/>
        <input type="search" placeholder="Search..." onChange={ e => { onFilterName && onFilterName(e.target.value)}}/>
        <label>
          <input
            type="checkbox"
            onClick={e => {
              onFilterStock && onFilterStock(e.target.checked);
            }}
          />
          Only show products in stock
        </label>
      </div>
    );
  }
}
export default SearchBar;