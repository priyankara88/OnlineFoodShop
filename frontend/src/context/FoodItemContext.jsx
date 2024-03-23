import { createContext } from "react";
import { food_list } from "../assets/assets";

export const FilterContext = createContext({});

const FilterProvider = ({ children }) => {
  const FoodItemDetails = {
    food_list,
  };

  return (
    <FilterContext.Provider value={FoodItemDetails}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
