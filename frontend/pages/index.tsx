import Router from "next/router"
import MyButton from "../src/components/Button"

const HomePage = ()=>{
  return (
    <div className="bg-gradient-to-b container  from-white to-gray-50 h-screen">
      <header className="  px-2 sm:px-0 ">
        <div className="flex items-center py-4 justify-between">
          <div className="flex items-center"> {/* logo container */ }
              <img className="w-12" src="/assets/images/logo.color.png" alt="logo"/>
              <h1 className="uppercase ml-2 font-semibold">Reviewlizer</h1>
          </div>
          <div className="flex">
            <div className=""><MyButton onclick={()=>{Router.push("/account/signin")}} type="primary" display="inline-block">Log In</MyButton></div>
          </div>
        </div>
        
      </header>
    </div>
  )
}

export default HomePage
