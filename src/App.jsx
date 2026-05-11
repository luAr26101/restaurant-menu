import { useState } from "react";
import Title from "./components/title";
import menu from "./data";
import Menu from "./components/menu";
import Categories from "./components/categories";

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const categories = ["all", ...new Set(menu.map((item) => item.category))];

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(menu);
      return;
    }
    const newItems = menu.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className='menu'>
        <Title text='Our menu' />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu menuItems={menuItems} />
      </section>
    </main>
  );
};
export default App;
