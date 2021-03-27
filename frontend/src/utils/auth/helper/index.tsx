import axios from "axios"
import {setCookie, parseCookies, destroyCookie} from 'nookies'

export const signUp = user =>{
    axios.post(`${process.env.API}/signup`, JSON.stringify(user), {
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
    return axios.post(`${process.env.API}/signin`, JSON.stringify(user), {
        headers:{
          'Content-Type': 'application/json'
          }
      })
      .then( res => {
        // console.log(typeof(res.data.token))
        destroyCookie(null, 'userToken')
        setCookie(null, 'userToken', res.data.token)
        console.log("cookkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkies",parseCookies())
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
    return axios.get(`${process.env.API}/user/${id}`, {
      headers:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
        }
    })
    .then( res => {
      console.log(res.data)
      return res
    })
    .catch( err =>{

      console.log(err.response)
      return err.response
    })
    
}

