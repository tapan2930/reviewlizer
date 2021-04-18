import React from 'react';
import {BiHomeAlt, BiGridAlt, BiStar} from "react-icons/bi";
import {BsSquareHalf} from "react-icons/bs";   
import NavButton from "../NavButtons"



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

const MobileNavbar :React.FC = ():React.ReactElement => {
    return (
        <div className={`py-2 bg-white transition-all duration-200 ease-out z-50  dark:border-gray-800 border-r  dark:bg-gray-900 dark:text-gray-50`}>
            
            <div className="flex justify-evenly items-center ">
                {
                    // Mapping each Navigation (icon,name,link) on sidebar
                    navLinks.map((navLink, idx:number)=>{
                        return navLink.status ? (
                            <div id={`${idx}navLink.name`}> 
                                <NavButton name={navLink.name} link={navLink.link} align="horizontal">
                                    <navLink.icon />
                                </NavButton>
                            </div>
                        ) : null
                    })
                }
            </div>
           
           
        </div>
    )
}

export default MobileNavbar