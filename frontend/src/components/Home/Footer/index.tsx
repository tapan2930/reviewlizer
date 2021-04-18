import React from 'react'

const Footer :React.FC = ():React.ReactElement => {
    return (
        <div>
        <div className="bg-gray-800 py-6 grid grid-cols-1 md:grid-cols-2">
          {/* left Side */}
          <div className="container">
            <div className="flex items-center justify-center md:justify-start md:ml-0"> {/* logo container */ }
                <img className="w-8 md:w-12" src="/assets/images/logo.color.png" alt="logo"/>
                <h1 className="uppercase ml-2 font-medium text-white text-sm md:text-base md:font-semibold">Reviewlizer</h1>
            </div>
          </div>

         {/* Right Side */}
          <div className="grid grid-cols-3 container px-3 text-white  my-5 text-sm md:text-base">
            <div className="mx-auto md:mx-0">
              <h1 className="font-semibold my-3">Product</h1>
              <h2 className="cursor-pointer font-light">Login</h2>
              <h2 className="cursor-pointer font-light">Sign Up</h2>
              <h2 className="cursor-pointer font-light">Dashboard</h2>
            </div>

            <div className="mx-auto md:mx-0">
              <h1 className="font-semibold my-3">Community</h1>
              <h2 className="cursor-pointer font-light">Contact Us</h2>
              <h2 className="cursor-pointer font-light">GitHub</h2>
              <h2 className="cursor-pointer font-light">Twitter</h2>
            </div>

            <div className="mx-auto md:mx-0">
              <h1 className="font-semibold my-3">Company</h1>
              <h2 className="cursor-pointer font-light">Term of Use</h2>
              <h2 className="cursor-pointer font-light">Privacy Policy</h2>
            </div>
          </div>
        </div>

        {/* second Part */}
        <div className="h-14 bg-gray-900 flex justify-center items-center text-gray-50 text-xs">
          <p>Made In India | Copyright @ 2021</p>
        </div>
      </div>
    )
}

export default Footer