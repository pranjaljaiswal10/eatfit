
export function orderidGen(){
    let  digit="1234567890",orderid="OD"
    for(let i=0;i<12;i++)
        {
     orderid+=Math.floor(Math.random()*digit.length)       
        }
     return orderid;   
}