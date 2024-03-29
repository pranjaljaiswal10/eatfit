export function searchData(text, allRestaurant) {
  const filterData = allRestaurant.filter((item) => {
    return item.info.name.toLowerCase().includes(text.trim().toLowerCase());
  });
  return filterData;
}