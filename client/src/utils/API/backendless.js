import Backendless from "backendless"
const axios=require("axios")

var APP_ID = '3F38703A-DA8E-8060-FFB6-857C57A93000';
var API_KEY = 'CD856A9F-DBFB-4F4D-BA6B-CB2D45010057';
Backendless.initApp(APP_ID, API_KEY);
export const Me=async(token)=>{

    return await axios({
        method: 'put',
        url:`https://rosystone.backendless.app/api/cache/me?timeout=7200000`,
        headers: {UserToken:token},
      });
}

export const LOGIN_USER=async(form)=>{
const login=form.email;
const password=form.password
const stayLoggedIn=true
 return await Backendless.UserService.login( login, password, stayLoggedIn )
  .then( function( loggedInUser ) {
    return(
      window.location.assign("/")
    )
  })
  .catch( function( error ) {
    console.log(error.message)
    });
}

export const ADD_USER=async(form)=>{
const x= form.firstName + "  " + form.lastName
    return await axios({
        method: 'post',
        url:`https://rosystone.backendless.app/api/users/register`,
        headers: {ContentType:"application/json"}, 
        data: {
          firstName: form.firstName,
          lastName:form.lastName, 
          email: form.email,
          password:form.password ,
          name:x,
          

        }
      });
}
export const bigLoad=async()=>{
  return  await axios.get(" https://api.backendless.com/{xxx}/{xxx}/data/Product")
}