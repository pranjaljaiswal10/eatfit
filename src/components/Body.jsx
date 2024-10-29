import { Link } from "react-router-dom";
import Restaurant_Card from "./Restaurant_Card";
import useRestaurantCard from "../utils/Hooks/useRestaurant";
import useFilterData from "../utils/Hooks/useFilterData";
import HomePageShimmer from "./HomePageShimmer";
import Restaurant_Filter from "./Restaurant_Filter";

const Body = () => {
  const allRestaurant = useRestaurantCard();
  const restaurant = useFilterData(allRestaurant);
  if (allRestaurant.length === 0) return <HomePageShimmer />;
  return (
    <div className="body mx-8 my-28 ">
      <p className="text-xl font-bold ml-10 mr-10 lg:mr-0 lg:pt-6 text-center lg:text-start">
        Restaurants with online food delivery in Allahabad
      </p>
      <Restaurant_Filter />
      <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 justify-items-center">
        {restaurant.length === 0 ? (
          <h1 className="lg:mt-28 mt-16 text-3xl font-bold lg:text-start text-center">
            No match found
          </h1>
        ) : (
          restaurant.map((item) => (
            <Link to={`/restaurant/${item.info.id}`} key={item.info.id}>
              <Restaurant_Card {...item.info} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};
export default Body;
