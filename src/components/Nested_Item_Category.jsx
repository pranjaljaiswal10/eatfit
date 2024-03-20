import { useState } from "react";
import ItemMenu from "./ItemMenu";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";

const Nested_Item_Category = ({ title, categories }) => {
  const [isOpen, setIsOpen] = useState(true);
  const handleButtonClick = () => {
 setIsOpen(!isOpen);

}
  return (
    <>
      <h1 className="font-bold text-lg">{title}</h1>
      {categories.map((item) => (
        <div className="categories" key={item.title}>
          <span onClick={(e)=>handleButtonClick(item.title,e)}>
            <h2 className="font-semibold">{`${item.title}(${item.itemCards.length})`}</h2>
            {isOpen ? (
              <button>
                <FaAngleUp />
              </button>
            ) : (
              <button>
                <FaAngleDown />
              </button>
            )}
          </span>
          {isOpen &&  item.itemCards.map((item) => (
            <ItemMenu {...item.card.info} showItem={isOpen} key={item.card.info.id} />
          ))}
        </div>
      ))}
    </>
  );
};
export default Nested_Item_Category;
