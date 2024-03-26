import { useState } from "react";

const FoodItemCard = ({ id, name, image, price, description, category }) => {
  const [buttonFlag, setButtonFlg] = useState(0);
  const [Qty, setQty] = useState(1);

  const HandlFlagEvent = (id) => {
    setButtonFlg(id);
  };
  // Handele Increment of qty button click  event

  const HandeleDecrement = () => {
    setQty((pre) => pre - 1);
  };
  // Handle Increment of qty button click event

  const HandleIncrement = () => {
    setQty((pre) => pre + 1);
  };

  console.log(Qty);
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
      <div key={id} className="absolute md:right-3 md:top-36 cursor-pointer ">
        <div
          onClick={() => HandlFlagEvent(id)}
          className="w-7 h-7 rounded-full border-2 border-zinc-600 bg-white flex items-center justify-center"
        >
          +
        </div>
      </div>

      <div
        className={`${
          buttonFlag === id
            ? "absolute right-3 md:top-36 flex items-center justify-center w-17 h-8 border-2 rounded-full bg-white"
            : "hidden absolute right-3 md:top-36  items-center justify-center w-17 h-8 border-2 rounded-full bg-white"
        } `}
      >
        <div
          onClick={() => HandeleDecrement()}
          className="w-7 h-7 flex items-center justify-center rounded-full border-2 border-zinc-600 bg-green-300 cursor-pointer"
        >
          -
        </div>
        <span>{Qty}</span>

        <div
          onClick={() => HandleIncrement()}
          className="w-7 h-7 flex items-center justify-center rounded-full border-2 border-zinc-600 bg-pink-300 cursor-pointer"
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
