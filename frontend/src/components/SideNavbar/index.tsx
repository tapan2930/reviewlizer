import React from 'react';
import Link from "next/link"
import {BiHomeAlt, BiGridAlt, BiStar} from "react-icons/bi";
import {BsSquareHalf} from "react-icons/bs";
import NavButton from "./navButton"

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
        link: "/dashboard/analysis",
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
    return (
        <div className="absolute bottom-0 top-16 w-16 fle items-center bg-white border-t shadow-left">
            <div className="flex flex-col">
                {
                    navLinks.map((navLink, idx)=>{
                        return (
                            <div>
                                <NavButton name={navLink.name}>
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