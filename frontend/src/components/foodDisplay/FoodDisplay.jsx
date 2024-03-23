import { useContext } from "react";
import { FilterContext } from "../../context/FoodItemContext";
import FoodItemCard from "./FoodItemCard";

const FoodDisplay = () => {
  const { food_list } = useContext(FilterContext);

  return (
    <div>
      <h1>Top Dishes Near You</h1>
      <div className="w-full md:pl-20  grid md:grid-cols-4 max-md:grid-cols-2">
        {food_list.map((key, index) => {
          return (
            <FoodItemCard
              key={index}
              id={key._id}
              name={key.name}
              image={key.image}
              price={key.price}
              description={key.description}
              category={key.category}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
