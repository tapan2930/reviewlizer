import TopNavbar from '../src/components/TopNavbar/index';
import SideNavbar from '../src/components/SideNavbar/index';
import DashboardMainLayout from "../src/components/DashboardMainLayout/index";
import nookies from 'nookies'


import  {useDarkMode, useNavbarToggle} from "../src/store/globalStore"
import { getUser } from '../src/utils/auth/helper';


const DashBoard = (props)=>{
    const isDarkMode = useDarkMode(state => state.theme);
    const isNavbar = useNavbarToggle(state => state.navbar)
    const toggleNavbar = useNavbarToggle(state => state.toggle);

    console.log(props.cookies.fromClient)
    const token = props.cookies.fromClinet
    // const user_id = localStorage.getItem("user_id")
    console.log(token)
    // const user = getUser(token,user_id)
    // console.log(user)

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
    // console.log("cookiesddddddddddddddddddddddddd:",cookies);
    if (cookies.userToken) {
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

