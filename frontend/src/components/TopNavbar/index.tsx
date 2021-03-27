import React from 'react';
import {FaBars} from "react-icons/fa";
import { BiMoon, BiSun} from "react-icons/bi";
import { RiLogoutBoxRLine } from "react-icons/ri"
import  {useDarkMode, useNavbarToggle} from "../../store/globalStore"
// import clearUserCookies from '../../utils/clearCookies';
import {useRouter} from "next/router"
import { destroyCookie } from 'nookies';



const TopNavbar = ()=>{
    const isDarkMode = useDarkMode(state => state.theme);
    const toggleDarkMode = useDarkMode(state => state.toggle);
    const toggleNavbar = useNavbarToggle(state => state.toggle);
    const router = useRouter()

    const logOut = ()=>{
        destroyCookie(null, 'userToken')
        localStorage.removeItem("user_id")
        router.push("/account/signin")
    }


    
    return ( 
        <div className="sticky top-0 w-full z-30">
             <div className="h-14 md:h-16 flex items-center bg-white dark:bg-gray-900  dark:text-gray-50 shadow-sm border-b  dark:border-gray-800 transition duration-200 ease-out">
            {/* Sidebar hamburger */}
            <div className="w-16 h-14 md:h-16 flex items-center justify-center">
                <span onClick={()=>toggleNavbar()} className="cursor-pointer"><FaBars /></span>
            </div>

            <div className="flex items-center ">  {/* Container with logo and name (visible after md) */}
                <div> {/* logo container */ }
                    <img className="w-12" src="/assets/images/logo.color.png" alt="logo"/>
                </div> 
                <div className="ml-2 font-bold uppercase text-sm tracking-wider hidden md:block"> {/* name container */}
                    <h1> Reviewlizer </h1>
                </div>
               
            </div>


            <div className="flex items-center ml-auto">
                <div className="mx-3"> {/* Darkmode Toggler container */}
                    <span onClick={toggleDarkMode} className="cursor-pointer">{ isDarkMode ? <BiSun /> : <BiMoon />}</span>
                </div>
                <div className="flex items-center relative">
                    <div className="cursor-pointer"> {/* Profile container */ }
                        <img className="w-10 rounded-full border-gray-800 dark:border-gray-50 border-2" src="/assets/images/profile.jpg" alt="profile"/>
                    </div> 
                </div>
                <div onClick={()=>logOut()} className="ml-3 flex justify-center items-center bg-gray-800  text-gray-50   cursor-pointer h-14 md:h-16 w-14 md:w-16"> {/* Profile Toggler container */}
                        <span> <RiLogoutBoxRLine /></span>
                    </div>
                
            </div>
       
        </div>
        </div>
       
    )
}

export default TopNavbar