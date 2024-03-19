import { useContext } from "react";
import { menu_list } from "../../assets/assets";

const ExpoloreFoods = ({ fooditems, setFooditems }) => {
  const HandleFoodItem = (menuename) => {
    setFooditems(menuename);
  };
  return (
    <div className="w-full">
      <h1 className="text-[24px] text-gray-700 mt-3">Explore or Menue</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, delectus
        exercitationem qui excepturi aliquid quibusdam voluptatum obcaecati
        eveniet fugiat numquam dignissimos aperiam culpa praesentium voluptas
        magnam autem non tenetur fuga.
      </p>
      <div className="md:flex md:flex-row md:items-center md:justify-center md:space-x-6 md:mt-4 scroll-mr-px ">
        {menu_list.map((key, index) => {
          return (
            <div key={index}>
              <img
                src={key.menu_image}
                alt="img"
                className={`${
                  fooditems == key.menu_name
                    ? "border-4  rounded-full border-red-600"
                    : ""
                } w-24 h-24 cursor-pointer`}
                onClick={() => HandleFoodItem(key.menu_name)}
              />
              <p className="flex justify-center items-center mt-2 cursor-pointer">
                {key.menu_name}
              </p>
            </div>
          );
        })}
      </div>
      <hr className="p-[1px] mt-2 bg-slate-300" />
    </div>
  );
};

export default ExpoloreFoods;
