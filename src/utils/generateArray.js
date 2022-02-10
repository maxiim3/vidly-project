import React from "react";
import PropTypes from "prop-types";

/**
 * Return An Array From 1 to [length] // [1 ... length]
 * @param length
 * @return {unknown[]}
 */
const GenerateArray = (length) => {
  return [...Array(length).keys()].map((i) => i + 1);
};

GenerateArray.propTypes = {
  length : PropTypes.number.isRequired
}
export default GenerateArray;
