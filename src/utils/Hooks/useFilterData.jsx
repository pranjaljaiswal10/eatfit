import { useSelector } from "react-redux";

const useFilterData = (allRestaurant) => {

  const {
    rating,
    lessthan,
    between,
    sort,
    searchTxt,
    fastDelivery,
    offers,
    pureVeg,
  } = useSelector((store) => store.filter);

  if(!allRestaurant) return

  let filteredRestaurant = [...allRestaurant];

  const topRatedRestaurant = rating
    ? filteredRestaurant.filter((item) => item?.info?.avgRatingString >= "4.0")
    : filteredRestaurant;

  const fastDeliveryRestaurant = fastDelivery
    ? topRatedRestaurant.filter(
        (item) =>
          item?.info?.sla?.deliveryTime >= 30 &&
          item?.info?.sla.deliveryTime <= 50
      )
    : topRatedRestaurant;
  const pureVegRestaurant = pureVeg
    ? fastDeliveryRestaurant.filter(
        (item) => item?.info?.badges?.imageBadges?.["0"]?.description === "pureveg"
      )
    : fastDeliveryRestaurant;
  const offersRestaurant = offers
    ? pureVegRestaurant.filter(
        (item) =>
          item?.info?.aggregatedDiscountInfoV3?.header ||
          item?.info?.aggregatedDiscountInfoV3?.subHeader
      )
    : pureVegRestaurant;
  const lessthanCost = lessthan
    ? offersRestaurant.filter(
        (item) => item.info.costForTwo.split(" ")[0] < "₹300"
      )
    : offersRestaurant;

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

  const searchRestaurant = searchTxt
    ? highToLow.filter((item) =>
        item?.info?.name.toLowerCase().includes(searchTxt.trim().toLowerCase())
      )
    : highToLow;
   
  return searchRestaurant;
};

export default useFilterData;
