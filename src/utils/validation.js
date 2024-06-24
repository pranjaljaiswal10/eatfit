

export const checkValidData=(email,name,password)=>{
   
const errors={}
  const isVaidEmail=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isValidPassword=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,15}$/.test(password);
  if(!isVaidEmail)
   {
    errors["email"]="Please enter a valid email address"
   }
  if(!isValidPassword)
    {
    errors["password"]="Your password should be 8 character, one uppercase, one lowercase and contain one digit"
    }
   if(name.trim()==="" && name!==undefined)
    {
      errors["name"]="Name field can't empty"
    } 
    return Object.keys(errors).length==0?null:errors;
}
export const checkValidData2=(email,password)=>{
   
const errors={}
  const isVaidEmail=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isValidPassword=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,15}$/.test(password);
  if(!isVaidEmail)
   {
    errors["email"]="Please enter a valid email address"
   }
  if(!isValidPassword)
    {
    errors["password"]="Your password should be 8 character, one uppercase, one lowercase and contain one digit"
    }
   
    return Object.keys(errors).length==0?null:errors;
}