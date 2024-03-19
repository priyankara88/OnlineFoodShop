import { useState } from "react";
import ExpoloreFoods from "../components/explorefoods/ExpoloreFoods";
import Header from "../layouts/Nav/Header";
import FoodDisplay from "../components/foodDisplay/FoodDisplay";

const Home = () => {
  const [fooditems, setFooditems] = useState("ALL");

  return (
    <div>
      <Header />
      <ExpoloreFoods fooditems={fooditems} setFooditems={setFooditems} />
      <FoodDisplay />
    </div>
  );
};

export default Home;
