

import ItemList from "./Nested_ItemList";

const Nested_Item_Category = ({ title, categories }) => {
  return (
    <div className="nested-item-category  shadow-md py-5 px-3 ">
      <h1 className="font-semibold sm:text-lg">{title}</h1>
      {categories.map((item) => (
        <ItemList key={item.title} {...item}/>
      ))}
    </div>
  );
};
export default Nested_Item_Category;
