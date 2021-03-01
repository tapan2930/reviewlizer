import React from 'react';
import {BiHomeAlt, BiGridAlt, BiStar} from "react-icons/bi";
import {BsSquareHalf} from "react-icons/bs";
import NavButton from "./navButton"
import  {useNavbarToggle} from "../../store/globalStore"


// List of navigation links and icons
const navLinks = [
    {
        name: "Home",
        link: "/dashboard",
        icon:  BiHomeAlt,
        status: true //disable == False
    },
    {
        name: "Analysis",
        link: "/dashboard/analysis",
        icon: BiGridAlt,
        status: true
    },
    {
        name: "Saved",
        link: "/dashboard/saved",
        icon: BiStar,
        status: true
    },
    {
        name: "Compare",
        link: "/dashboard/compare",
        icon: BsSquareHalf,
        status: false
    }

]

const SideNavbar = ()=>{
    let isNavbar = useNavbarToggle()
    return (
        <div className={`${isNavbar ? " fixed " : " static "}` + " h-full w-16 bottom-0 top-0 items-center pt-16  bg-white dark:border-gray-800 border-r  dark:bg-gray-900 dark:text-gray-50"}>
 
            <div className="flex flex-col">
                {
                    // Mapping each Navigation (icon,name,link) on sidebar
                    navLinks.map((navLink, idx:number)=>{
                        return (
                            <div id={`${idx}`}> 
                                <NavButton name={navLink.name} link={navLink.link}>
                                    <navLink.icon />
                                </NavButton>
                            </div>
                        )
                    })
                }
        
            </div>
            
        </div>
    )
}

export default SideNavbar
