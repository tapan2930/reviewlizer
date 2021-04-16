// npm packages
import  nookies from 'nookies'
import {useRouter} from 'next/router';
import { useEffect, useState } from 'react';


// hepler hooker and function and globar store
import { getUser } from '../src/utils/auth/helper';
import clearUserCookies from '../src/utils/clearCookies';


// components
import DashboardMainLayout from "../src/components/DashboardMainLayout/index";
import DashBoardBase from '../src/components/DashBoardBase';



const DashBoard = (props)=>{

    const [userInfo,setUserInfo] = useState(null)
    const router = useRouter()

    useEffect(()=>{
      const token = props.cookies.userToken
      const user_id = localStorage.getItem("user_id")
      const usergetHandler = async (user_id,token)=>{
      await  getUser(user_id,token).then((user)=>{
        if(user.status !== 200){
          console.log(user.status)
          clearUserCookies()
          router.push("/account/signin")
        }
        setUserInfo(user.data)
        })
      }
      usergetHandler(token,user_id)
    }, [])
    return (
      <DashBoardBase>
          <DashboardMainLayout userInfo = {userInfo} />
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

export default DashBoard

