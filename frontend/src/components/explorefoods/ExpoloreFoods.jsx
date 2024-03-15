import { menu_list } from "../../assets/assets";

const ExpoloreFoods = () => {
  return (
    <div className="w-full">
      <h1>Explore or Menue</h1>
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
              <img src={key.menu_image} alt="img" className="w-28 h-28" />
              <p className="flex justify-center items-center mt-2">
                {key.menu_name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExpoloreFoods;
