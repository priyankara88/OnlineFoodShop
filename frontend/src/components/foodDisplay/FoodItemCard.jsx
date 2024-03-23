import { useState } from "react";

const FoodItemCard = ({ id, name, image, price, description, category }) => {
  const [buttonFlag, setButtonFlg] = useState(0);

  const HandlFlagEvent = () => {
    console.log("button click");
  };

  return (
    <div className="relative w-[200px] mt-6 rounded-b-lg ">
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: "cover",
          backgroundRepeat: "no-repeat",
          width: "200px",
          height: "200px",
        }}
        className="rounded-t-lg shadow-lg "
      />
      <div className="absolute md:right-3 md:top-36 cursor-pointer ">
        <div
          onClick={HandlFlagEvent}
          className="w-7 h-7 rounded-full border-2 border-zinc-600 bg-white flex items-center justify-center"
        >
          +
        </div>
      </div>
      <div className="mt-2 flex justify-between items-center">
        <h1>{name}</h1>
        <img src="/src/assets/rating_starts.png" alt="star" className="h-4" />
      </div>
      <h1>{description}</h1>
      <p>${price}</p>
    </div>
  );
};

export default FoodItemCard;
