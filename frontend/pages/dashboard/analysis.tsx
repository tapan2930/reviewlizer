// npm packages
import nookies from "nookies"
import { useEffect, useState } from 'react';
import {useRouter} from 'next/router';

// hepler hooker and function and globar store
import { getUser } from '../../src/utils/auth/helper';
import clearUserCookies from '../../src/utils/clearCookies';
import  {useDarkMode, useNavbarToggle} from "../../src/store/globalStore";

// components
import AnalysisMainLayout from "../../src/components/AnalysisMainLayout";
import SideNavbar from "../../src/components/SideNavbar"
import TopNavbar from "../../src/components/TopNavbar"


const Analaysis = (props)=>{
    const isDarkMode = useDarkMode(state => state.theme);
    const isNavbar = useNavbarToggle(state => state.navbar)
    const toggleNavbar = useNavbarToggle(state => state.toggle);
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
        <div className={` ${isDarkMode ? "dark": " "} `}>
            <div className="font-body bg-gray-50  text-gray-700 dark:text-gray-50 dark:bg-gray-900 transition duration-200 ease-out">
            <TopNavbar />
           
            <div className="flex">
            {
            <SideNavbar />
            
            }
            <div onClick={()=> toggleNavbar()} className={` ${isNavbar ? "hidden" : " fixed"} md:hidden bg-gray-900 dark:bg-gray-700  opacity-60 inset-0 z-20 h-screen `}>
            </div>
           <div className="container mx-auto"><AnalysisMainLayout /></div>
            </div>
            </div>
          
        </div>
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