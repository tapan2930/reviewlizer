import React from 'react';
import Avatar from 'react-avatar';
import ReactTooltip from "react-tooltip"
import {FaBars} from "react-icons/fa";
import { BiMoon, BiSun} from "react-icons/bi";
import { RiLogoutBoxRLine } from "react-icons/ri"
import  {useDarkMode, useNavbarToggle, userInfo} from "../../store/globalStore"
// import clearUserCookies from '../../utils/clearCookies';
import {useRouter} from "next/router"
import { destroyCookie } from 'nookies';



const TopNavbar = ()=>{
    const isDarkMode = useDarkMode(state => state.theme);
    const toggleDarkMode = useDarkMode(state => state.toggle);
    const toggleNavbar = useNavbarToggle(state => state.toggle);
    const user = userInfo(state => state.userData)
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
            <div className="w-16 h-14 md:h-16  items-center justify-center hidden md:flex ">
                <span onClick={()=>toggleNavbar()} className="cursor-pointer"><FaBars /></span>
            </div>

            <div className="flex items-center ">  {/* Container with logo and name (visible after md) */}
                <div> {/* logo container */ }
                    <img className="w-12 ml-8 md:ml-0" src="/assets/images/logo.color.png" alt="logo"/>
                </div> 
                <div className="ml-2  font-bold uppercase text-xs md:text-sm tracking-wider "> {/* name container */}
                    <h1> Reviewlizer </h1>
                </div>
               
            </div>


            <div className="flex items-center ml-auto">
                <div className="mx-3"> {/* Darkmode Toggler container */}
                    <span onClick={toggleDarkMode} className="cursor-pointer">{ isDarkMode ? <BiSun /> : <BiMoon />}</span>
                </div>
                <div className="flex items-center relative">
                    <div className="cursor-pointer w-10 h-10"> {/* Profile container */ }
                        {
                            user ? <Avatar email={user.email} name={user.email} round={true} size="40"  data-for='profile' data-tip={user.email} /> : <Avatar round={true} size="40" />
                        }
                       
                    </div> 
                </div>
                <div data-for='signOut' data-tip="Log Out"  onClick={()=>logOut()} className="ml-3 flex justify-center items-center bg-gray-800  text-gray-50   cursor-pointer h-14 md:h-16 w-14 md:w-16"> {/* Profile Toggler container */}
                        <span > <RiLogoutBoxRLine/></span>
                    </div>
                
            </div>
       
        </div>
                        <ReactTooltip id="profile" delayShow={500} />
                        <ReactTooltip id="signOut" delayShow={500} />
        </div>
       
    )
}

export default TopNavbar