import { useEffect } from "react";

import TopNavbar from '../src/components/TopNavbar/index';
import SideNavbar from '../src/components/SideNavbar/index';
import MainLayout from "../src/components/MainLayout/index";

import  {useDarkMode, useNavbarToggle} from "../src/store/globalStore"
import useWindowSize from "../src/utils/useWindowSize"


const DashBoard = ()=>{
    let width = "nsm";
    const isDarkMode = useDarkMode(state => state.theme);
    const isNavbar = useNavbarToggle(state => state.navbar)

    useEffect(()=>{
        width = useWindowSize();
    })

    return (
        <div className={` ${isDarkMode ? "dark": " "} `}>
            <div className="font-body bg-gray-50  text-gray-700 dark:text-gray-50 dark:bg-gray-900">
            <div className="fixed w-full z-10"><TopNavbar /></div>
           
            <div className="flex">
            {
                isNavbar && <SideNavbar />
            }
            {/* <div className={` ${isNavbar ? " left-0 w-16" :"  -left-full"}  `+" flex-none"}> <SideNavbar /></div> */}
            <div className=" container mx-auto"><MainLayout /></div>
            </div>
            </div>
          
        </div>
    )
}

export default DashBoard

