import axios from "axios"
import {generate} from "shortid"

const API = process.env.NODE_ENV === "production" ? process.env.API : process.env.LOCALAPI


export const addToSavedProduct = (token,userId, newProduct)=>{
    let productData = {...newProduct,id:generate()}

    console.log("Product to be added:", productData)
    return axios.put(`${API}user/updateSaved/add/${userId}/`, JSON.stringify(productData), {
        headers:{
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
          }
      }).then(res=>{
          console.log(res)
          return {
            status: 200,
            data: res.data
          }
      }).catch(err =>{
          console.log(err.response)
          return {
            status: 400,
            data: err.response
          }
      })
}

export const deleteFromSavedProduct = (token, userId, productId)=>{
    let data = {
        productId
    }
    
    return axios.put(`${API}user/updateSaved/delete/${userId}`, JSON.stringify(data), {
        headers:{
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
          }
      }).then(res=>{
          console.log(res)
          return {
            status: 200,
            data: res.data
          }
      }).catch(err =>{
          console.log(err.response)
          return {
            status: 400,
            data: err.response
          }
      })
}