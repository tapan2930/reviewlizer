import React from 'react';
import {FaBars} from "react-icons/fa";
import { BiMoon, BiSun} from "react-icons/bi";
import { TiArrowSortedDown } from "react-icons/ti"


const TopNavbar = ()=>{
    return (
        <div className="h-14 md:h-16 flex items-center bg-white border-black shadow-bottom">
            {/* Sidebar hamburger */}
            <div className="w-16 h-14 md:h-16 flex items-center justify-center">
                <span className="cursor-pointer"><FaBars /></span>
            </div>

           
            <div className="flex items-center">  {/* Container with logo and name (visible after md) */}
                <div> {/* logo container */ }
                    <img className="w-12" src="/assets/images/logo.color.png" alt="logo"/>
                </div> 
                <div className="ml-2 font-bold uppercase text-sm tracking-wider hidden md:block"> {/* name container */}
                    <h1> Reviewlizer </h1>
                </div>
            </div>


            <div className="flex items-center ml-auto">
                <div className="mx-3"> {/* Darkmode Toggler container */}
                    <span className="cursor-pointer"><BiMoon /></span>
                </div>
                <div className="flex items-center cursor-pointer">
                    <div> {/* Profile container */ }
                        <img className="w-10 rounded-full border-gray-800 border-2" src="/assets/images/profile.jpg" alt="profile"/>
                    </div> 

                    <div className="mx-3"> {/* Darkmode Toggler container */}
                        <TiArrowSortedDown />
                    </div>
                </div>
                
            </div>
       
        </div>
    )
}

export default TopNavbar