import {useState, useEffect} from "react"
import {useRouter} from 'next/router';

// hepler fuctions
import { getUser } from '../../src/utils/auth/helper';
import clearUserCookies from '../../src/utils/clearCookies';


const useAuthUser = (userToken) =>{
    const [userInfo,setUserInfo] = useState(null)
    const router = useRouter()

    useEffect(()=>{
        const token = userToken
        const user_id = localStorage.getItem("user_id")
        const usergetHandler = async (user_id,token)=>{
          let user =  await  getUser(user_id,token)
          if(user.status !== 200){
            clearUserCookies()
            router.push("/account/signin")
          }
          setUserInfo(user.data)
        }
        usergetHandler(token,user_id)
  
      }, [])

    return userInfo  
}

export default useAuthUser