import React from 'react'
import DashBoardBase from '../../src/components/DashBoardBase'
import SavedPageMainLayout from '../../src/components/SavedPageMainLayout'
import nookies from "nookies"
import { useEffect, useState } from 'react';
import {useRouter} from 'next/router';


// hepler hooker and function and globar store
import { getUser } from '../../src/utils/auth/helper';
import clearUserCookies from '../../src/utils/clearCookies';

const SavedPage :React.FC = (props:any):React.ReactElement => {
    const [userInfo,setUserInfo] = useState(null)
    const router = useRouter()

    useEffect(()=>{
        const token = props.cookies.userToken
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

    return (
        <DashBoardBase>
          {
            userInfo ? <SavedPageMainLayout savedProducts={userInfo.savedProducts} /> : null
          }
        </DashBoardBase>
    )
}


export const getServerSideProps = async (context) => {
    const cookies = nookies.get(context)
    if (cookies.userToken) {
        return { props: { cookies } };
      }
      return {
        redirect: {
          destination: '/account/signin',
          permanent: false,
        },
      };
  };

export default SavedPage