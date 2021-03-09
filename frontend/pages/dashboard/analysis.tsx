import AnalysisMainLayout from "../../src/components/AnalysisMainLayout";
import SideNavbar from "../../src/components/SideNavbar"
import TopNavbar from "../../src/components/TopNavbar"

import  {useDarkMode, useNavbarToggle} from "../../src/store/globalStore";



const Analaysis = ()=>{
    const isDarkMode = useDarkMode(state => state.theme);
    const isNavbar = useNavbarToggle(state => state.navbar)
    const toggleNavbar = useNavbarToggle(state => state.toggle);

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

export default Analaysis