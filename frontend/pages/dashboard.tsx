import TopNavbar from '../src/components/TopNavbar/index'
import SideNavbar from '../src/components/SideNavbar/index'

const DashBoard = ()=>{
    return (
        <div className="font-body bg-gray-50 h-screen text-gray-700">
            <TopNavbar />
            <SideNavbar />
        </div>
    )
}

export default DashBoard