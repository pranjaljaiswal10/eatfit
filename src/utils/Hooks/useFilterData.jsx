import { useSelector } from "react-redux";
import { searchData } from "../helper";

const useFilterData = (allRestaurant) => {
  let filteredRestaurant = [...allRestaurant];
  const { rating, lessthan, between, sort, searchtxt,fastDelivery,offers,pureVeg } = useSelector(
    (store) => store.filter
  );

  const topRatedRestaurant = rating
    ? filteredRestaurant.filter((item) => item?.info?.avgRatingString >= "4.3")
    : filteredRestaurant;
  const lessthanCost = lessthan
    ? topRatedRestaurant.filter(
        (item) => item.info.costForTwo.split(" ")[0] < "₹300"
      )
    : topRatedRestaurant;
  const betweenCost = between
    ? lessthanCost.filter(
        (item) =>
          item?.info?.costForTwo.split(" ")[0] > "₹300" &&
          item?.info?.costForTwo.split(" ")[0] < "₹600"
      )
    : lessthanCost;
  const lowToHigh =
    sort === "lowtohigh"
      ? betweenCost.sort((a, b) => {
          let left = a.info?.costForTwo.split(" ")[0].slice(1),
            right = b.info?.costForTwo.split(" ")[0].slice(1);
          return Number(left) - Number(right);
        })
      : betweenCost;
  const highToLow =
    sort === "hightolow"
      ? lowToHigh.sort((a, b) => {
          let left = a.info?.costForTwo?.split(" ")[0].slice(1),
            right = b?.info?.costForTwo.split(" ")[0].slice(1);
          return Number(right) - Number(left);
        })
      : lowToHigh;
  const searchRestaurant = searchtxt
    ? lowToHigh
    : searchData(searchtxt, highToLow);

  return searchRestaurant;
};

export default useFilterData;
