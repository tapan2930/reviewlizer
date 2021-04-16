// npm packages
import nookies from "nookies"
import { useEffect, useState } from 'react';
import {useRouter} from 'next/router';

// hepler hooker and function and globar store
import { getUser } from '../../src/utils/auth/helper';
import clearUserCookies from '../../src/utils/clearCookies';

// components
import AnalysisMainLayout from "../../src/components/AnalysisMainLayout";
import DashBoardBase from "../../src/components/DashBoardBase";


const Analaysis = (props)=>{
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
          <AnalysisMainLayout />
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

export default Analaysis