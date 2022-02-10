import React from "react";
import PropTypes from "prop-types";

/**
 * Returns a Filtred array, each items is mapped to the pagination
 * @param currentPage
 * @param arrayOfItems
 * @param pageSize
 * @return {*}
 * @constructor
 */
const Paginate = (currentPage, arrayOfItems, pageSize) => {
  return arrayOfItems.filter(item => (
    arrayOfItems.indexOf(item) >= ((currentPage - 1) * pageSize)
    && arrayOfItems.indexOf(item) < (currentPage * pageSize)));
};

// Type Checking
Paginate.propTypes =  {
  currentPage : PropTypes.number.isRequired,
  pageSize : PropTypes.number.isRequired,
  arrayOfItems : PropTypes.array.isRequired,
}
export default Paginate;