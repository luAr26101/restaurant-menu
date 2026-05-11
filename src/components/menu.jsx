import MenuItem from "./menu-item";

function Menu({ menuItems }) {
  console.log(menuItems);
  return (
    <div className='section-center'>
      {menuItems.map((menuItem) => (
        <MenuItem key={menuItem.id} {...menuItem} />
      ))}
    </div>
  );
}

export default Menu;
