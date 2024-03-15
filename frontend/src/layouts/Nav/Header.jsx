const Header = () => {
  return (
    <div
      className=" md:mt-10"
      style={{
        backgroundImage: "url('header_img.png')",
        backgroundSize: "container",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        height: "34vw",
      }}
    >
      <div className="flex-wrap header md:pt-[10vw] md:pl-20 ">
        <h1 className="text-[60px] text-white">
          Order your favourite food here
        </h1>
        <p className="md:mt-2 text-white text-[16px]">
          Order your favorite food here and enjoy a hassle-free dining
          experience from the comfort of your home. Explore our diverse menu and
          treat yourself to delicious meals delivered right to your doorstep
        </p>
        <button className="md:mt-[40px] md:px-10 md:py-2 rounded-full border-2 border-gray-600 hover:bg-white">
          View Menue
        </button>
      </div>
    </div>
  );
};

export default Header;
