import Backendless from "backendless"
import { TopSeven } from "./coinGecko";
const axios=require("axios")

var APP_ID = '3F38703A-DA8E-8060-FFB6-857C57A93000';
var API_KEY = 'CD856A9F-DBFB-4F4D-BA6B-CB2D45010057';
Backendless.initApp(APP_ID, API_KEY);






export const Get_Seven=async()=>{
const resData= await Backendless.Data.of( "topseven" ).find()
return resData
}


export const Me=async(key,obj)=>{
 return await Backendless.Cache.put(key, obj)
  .then( function( result ) {
    console.log(result)
  })
  .catch( function( error ) {
    console.log(error.message)
  });
}

export const ADD_SEARCH=async(search)=>{

  Backendless.Data.of( "Search" ).save( search )
  .then( function( savedObject ) {
      console.log( "new Search instance has been saved" );
    })
  .catch( function( error ) {
      console.log( "an error has occurred " + error.message );
    });
}



export const getCache = async (key)=>{
  return await Backendless.Cache.get( key )
  // .then( function( objectFromCache ) {
  //   //console.log(objectFromCache)
  //   //  objectFromCache
  // })
  // .catch( function( error ) {
  // });
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

const TopSevenRefresh=async()=>{
  Backendless.Data.of( "topseven" ).bulkDelete("supply != 1")
 .then( async function( objectsDeleted ) {
   console.log(objectsDeleted)
   const x=await TopSeven();
   Backendless.Data.of( "topseven" ).bulkCreate( x )
    console.log("bulk create successful")
  })
 .catch( function( error ) {
   console.log(error.message)
  });
} 
 setInterval(TopSevenRefresh, 18000000);
