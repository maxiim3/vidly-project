import React from "react";


const FilterGender = (activeFilter, defaultFilter, inputItems ) => {
  if(activeFilter._id === defaultFilter._id) return inputItems
  return inputItems.filter(movie =>
    (movie.genre._id === activeFilter._id)
  )
};
export default FilterGender;
