

import ItemList from "./ItemList";

const Nested_Item_Category = ({ title, categories }) => {
  return (
    <div className="nested-item-category ">
      <h1 className="font-semibold text-lg">{title}</h1>
      {categories.map((item) => (
        <ItemList key={item.title} {...item}/>
      ))}
    </div>
  );
};
export default Nested_Item_Category;
