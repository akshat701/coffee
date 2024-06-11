
import DishesCard from "../layouts/DishesCard";
import menu1 from "../assets/img/menu1.jpg.jpg";
import menu2 from "../assets/img/menu2.jpg";
import menu3 from "../assets/img/menu3.jpg";

const Menu = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center lg:pt-8 pt-24 pb-10">
        Premium Menu
      </h1>

      <div className=" flex flex-wrap gap-8 justify-center">
        <DishesCard img={menu1} title="Cold Coffee" price="₹150" />
        <DishesCard img={menu2} title="Cold Coffee" price="₹150" />
        <DishesCard img={menu3} title="Cold Coffee" price="₹150" />
      </div>
    </div>
  );
};

export default Menu;
