import AnalysisMainLayout from "../../src/components/AnalysisMainLayout";
import SideNavbar from "../../src/components/SideNavbar"
import TopNavbar from "../../src/components/TopNavbar"

import  {useDarkMode, useNavbarToggle} from "../../src/store/globalStore";


const Analaysis = ()=>{
    const isDarkMode = useDarkMode(state => state.theme);
    const isNavbar = useNavbarToggle(state => state.navbar)
    return (
        <div className={` ${isDarkMode ? "dark": " "} `}>
            <div className="font-body bg-gray-50  text-gray-700 dark:text-gray-50 dark:bg-gray-900  h-screen overflow-y-hidden">
            <TopNavbar />
           
            <div className="flex">
            {
                isNavbar && <SideNavbar />
            }
            {/* <div className={` ${isNavbar ? " left-0 w-16" :"  -left-full"}  `+" flex-none"}> <SideNavbar /></div> */}
            <div className=" overflow-y-scroll h-screen container mx-auto"><AnalysisMainLayout /></div>
            </div>
            </div>
          
        </div>
    )
}

export default Analaysis