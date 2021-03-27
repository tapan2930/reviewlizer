// npm packages
import  nookies from 'nookies'
import {useRouter} from 'next/router';
import { useEffect, useState } from 'react';


// hepler hooker and function and globar store
import  {useDarkMode, useNavbarToggle} from "../src/store/globalStore"
import { getUser } from '../src/utils/auth/helper';
import clearUserCookies from '../src/utils/clearCookies';


// components
import TopNavbar from '../src/components/TopNavbar/index';
import SideNavbar from '../src/components/SideNavbar/index';
import DashboardMainLayout from "../src/components/DashboardMainLayout/index";



const DashBoard = (props)=>{
    const isDarkMode = useDarkMode(state => state.theme);
    const isNavbar = useNavbarToggle(state => state.navbar)
    const toggleNavbar = useNavbarToggle(state => state.toggle);
    const [userInfo,setUserInfo] = useState(null)
    const router = useRouter()

    useEffect(()=>{
      const token = props.cookies.userToken
      console.log("inside",props.cookies.userToken)
      const user_id = localStorage.getItem("user_id")
      const usergetHandler = async (user_id,token)=>{
        let user =  await  getUser(user_id,token)
        if(user.status !== 200){
          console.log(user.status)
          clearUserCookies()
          router.push("/account/signin")
        }
        setUserInfo(user.data)
      }
      usergetHandler(token,user_id)

    }, [])
    return (
        <div className={` ${isDarkMode ? "dark": " "} `}>
            <div className="font-body bg-gray-50  text-gray-700 dark:text-gray-50 dark:bg-gray-900 h-screen transition duration-200 ease-out">
            <TopNavbar />
           
            <div className="flex">
            {
            <SideNavbar />
            
            }
             <div onClick={()=> toggleNavbar()} className={` ${isNavbar ? "hidden" : " fixed"} frost  md:hidden  inset-0 z-20 h-screen `}>
            </div>
            <div className=" container mx-auto"><DashboardMainLayout /></div>
            </div>
            </div>
          
        </div>
    )
}

export const getServerSideProps = async (context) => {
    const cookies = nookies.get(context)
    console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",cookies.userToken)
    if (cookies.userToken !== undefined) {
        console.log("inside",cookies.userToken)
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

