import React from "react";

const Paginate = (currentPage, arrayOfItems, pageSize) => {
  return arrayOfItems.filter(item => (
    arrayOfItems.indexOf(item) >= ((currentPage - 1) * pageSize)
    && arrayOfItems.indexOf(item) < (currentPage * pageSize)));
};

export default Paginate;

// activePage = (currentPage, arrayOfItems, pageSize) => {
  // const previousPage = currentPage -1
  // if (!arrayOfItems.includes(currentPage) )this.setState({ currentPage: previousPage })
  // return (arrayOfItems.includes(currentPage)) ? currentPage : this.setState({ currentPage: previousPage });
// }
