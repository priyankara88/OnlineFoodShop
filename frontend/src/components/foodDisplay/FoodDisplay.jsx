import React, { useContext } from "react";
import { FilterContext } from "../../context/FoodItemContext";

const FoodDisplay = () => {
  const FoodItemDetails = useContext(FilterContext);

  console.log("FoodItemDetails", FoodItemDetails);
  return <div> </div>;
};

export default FoodDisplay;
