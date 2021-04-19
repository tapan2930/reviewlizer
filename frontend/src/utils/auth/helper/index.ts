import axios from "axios"
import {setCookie, parseCookies, destroyCookie} from 'nookies'

const API = process.env.NODE_ENV === "production" ? process.env.API : process.env.LOCALAPI

export const signUp = user =>{
    axios.post(`${API}/signup`, JSON.stringify(user), {
        headers:{
          'Content-Type': 'application/json'
          }
      })
      .then( res => {
        // setResult({...result, success:true, error:false})
        return res
      })
      .catch( err =>{
        // setResult({...result, error:true, success:false})
        return err
      })
}



export const signIn = async user => {
    return axios.post(`${API}/signin`, JSON.stringify(user), {
        headers:{
          'Content-Type': 'application/json'
          }
      })
      .then( res => {
        setCookie(null, 'userToken', res.data.token, {
          path:"/"
        })
        localStorage.setItem("user_id",res.data.user._id)
        res = {...res, status:200}
        return res
      })
      .catch( err =>{
        // setResult({...result, error:true, success:false})
        let status = 400
        return {status}
      })
}


export const signOut = next =>{
        if( typeof window !== "undefined") {
            localStorage.removeItem("user_id")
            next();
        }
}
 
export const getUser = (token, id)=>{
    return axios.get(`${API}/user/${id}`, {
      headers:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
        }
    })
    .then( res => {
      return res
    })
    .catch( err =>{

      console.log(err.response)
      return err.response
    })
    
}

