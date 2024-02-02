export function filteredData(text,allRestaurant){
    const filterData=allRestaurant.filter((item)=>{
        return item?.name.toLowerCase().includes(text.trim().toLowerCase())
    })
    return filterData;
}