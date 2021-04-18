import {useState, useEffect} from "react"
import {useRouter} from 'next/router';
import {userInfo} from "../store/globalStore"

// hepler fuctions
import { getUser } from '../../src/utils/auth/helper';
import clearUserCookies from '../../src/utils/clearCookies';


const useAuthUser = (userToken) =>{
    const router = useRouter()
    const userInfoSetter = userInfo(state => state.setUser)
    const userAuth = userInfo(state => state.authUser)
    const user = userInfo(state => state.userData)


    useEffect(()=>{
        const token = userToken
        const user_id = localStorage.getItem("user_id")
        const usergetHandler = async (user_id,token)=>{
          let user =  await  userAuth(token, user_id)
          console.log(user, "hooks")
          if(user.status !== 200){
            clearUserCookies()
            router.push("/account/signin")
          }
          userInfoSetter(user.data)
        }
        usergetHandler(token,user_id)
  
      }, [])

    return user
}

export default useAuthUser