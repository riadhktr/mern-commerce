
import { getCookie, setCookie } from "./cookies";
import {setLocalStorage, getLocalStorage } from "./localStorage";

export const setAuthentification = (token,user)=>{
    setCookie('token',token);
    setLocalStorage('user',user)
    }


export const isAuthenticated =()=>{
    const cookie = getCookie('token')
    console.log('coockie',cookie);
    
if( (cookie && getLocalStorage('user'))){
  return getLocalStorage('user'); 

    
}else{
    return false;
}
}