export function searchData(text,allRestaurant){
    const filterData=allRestaurant.filter((item)=>{
        return item.info.name.toLowerCase().includes(text.trim().toLowerCase());
    })
    return filterData;
}

export function filterData(allRestaurant,value){
   let filteredRestaurant=[...allRestaurant]

    const filterData=value==="less than Rs300"?filteredRestaurant.filter((item)=>{
        return item.info.costForTwo.split(" ")[0]<=300
    }):allRestaurant;
    return filterData;
}