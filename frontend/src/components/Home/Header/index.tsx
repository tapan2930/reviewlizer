import React from 'react'
import MyButton from '../../Button'
import Router from "next/router"

const HomeHeader :React.FC = ():React.ReactElement => {
    return (
        <header className="  px-2 sm:px-0 ">
        <div className="flex items-center py-4 justify-between">
          <div className="flex items-center"> {/* logo container */ }
              <img className="w-12" src="/assets/images/logo.color.png" alt="logo"/>
              <h1 className="uppercase ml-2 font-semibold">Reviewlizer</h1>
          </div>
          <div className="flex">
            <div className="mr-2"><MyButton onclick={()=>{Router.push("/dashboard")}} type="outline" display="inline-block"><span className="">Dashboard</span></MyButton></div>
            <div className=""><MyButton onclick={()=>{Router.push("/account/signin")}} type="primary" display="inline-block">Log In</MyButton></div>
          </div>
        </div>
      </header>
    )
}

export default HomeHeader