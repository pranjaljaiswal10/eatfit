

export const checkValidData=(email,name,password)=>{
   
const errors={}
  const isVaidEmail=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isValidPassword=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  if(!isVaidEmail)
   errors["email"]="Please enter a valid email address"
  if(!isValidPassword)
    errors["password"]="Please enter a valid password"
    return Object.keys(errors).length!==0?errors:null;
}