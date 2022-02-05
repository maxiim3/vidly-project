import React from "react";

const GenerateArray = (length) => {
  return [...Array(length).keys()].map((i) => i + 1);
};

export default GenerateArray;
