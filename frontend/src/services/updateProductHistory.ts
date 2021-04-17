import axios from "axios"
import {generate} from "shortid"

const API = process.env.NODE_ENV === "production" ? process.env.API : process.env.LOCALAPI


export const addToProductHistory = (userId, productSearched, token)=>{
    let productData = {id:generate(), link: productSearched}
    console.log("Product to be added:", productData)
    return axios.post(`${API}/updateHistory/add/${userId}/`, JSON.stringify(productData), {
        headers:{
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
          }
      }).then(res=>{
          console.log(res)
      }).catch(err =>{
          console.log(err.response)
      })
}

export const deleteFromProductHistory = (userId, productId, token)=>{
    let data = {
        productId
    }
    return axios.post(`${API}/updateHistory/delete/${userId}/`, JSON.stringify(data), {
        headers:{
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
          }
      }).then(res=>{
          console.log(res)
      }).catch(err =>{
          console.log(err.response)
      })
}
