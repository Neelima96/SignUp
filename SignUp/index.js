function Signup(userName){
  
  let flag=0;
  
  let UserNames=["Neelima","Niveda","Surya","DVD","Deepu"];
  
  for(let i=0;i<UserNames.length;i++)
  {
    if(UserNames[i]===userName)
    {
       flag=1;
       break;
    }
  }
  if(flag)
  {
    return "User Already Regsistered, Please Login";
  }
  else
  {
    UserNames.push(userName);
    return "Signup Sucessfull, Please Login";
  }

}
console.log(Signup("Vinni"));
