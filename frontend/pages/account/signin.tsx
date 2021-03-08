import React from "react"
import {HiArrowNarrowLeft} from "react-icons/hi"
import MyButton from "../../src/components/Button"


const SignIn:React.FC = ():React.ReactElement=>{
    return (
        <div className="container h-screen overflow-y-hidden">
            <div className="inline-flex fixed top-0   cursor-pointer items-center font-semibold text-sm p-2 text-gray-800">
                <span className="mr-2 text-lg"><HiArrowNarrowLeft /></span>
                <span>Back</span>           
            </div>
            <div className="flex justify-center sm:items-center h-full">
            <div style={{"maxWidth":"486px", "width":"486px"}} className="px-3 py-12 md:px-12 flex flex-col md:border md:rounded-lg">
                <div className="mx-auto">
                <img className="w-12" src="/assets/images/logo.color.png" alt="logo"/>
                </div>
                <div className="w-full text-center my-6">
                    <span className="block mb-2">Sign In to continue with</span>
                    <span className=" font-semibold text-primaryPink tracking-wide border-b-4 border-secondaryPink">Reviewlizer</span>
                </div>
                <div>
                    <form className="block">
                        <label className="block text-xs mb-1 " >Email Id:</label>
                        <input className="block border w-full py-3 mb-4 px-2"  type="text" value="" name="emailId" placeholder="Enter Email id..." />
                        <label className="block text-xs mb-1">Password:</label>
                        <input className="block border w-full py-3 mb-6 px-2" type="password" value="" name="password" placeholder="Enter password..." />
                        <MyButton type="outline" display="block" style="border w-full mb-6"> Sign In </MyButton>
                    </form>
                </div>
                <div>
                    <p className="text-sm ">Don’t Have Account ? <span className=" text-primaryPink">Create Account</span></p>
                </div>
           
            </div>
            </div>
           

           
            
        </div>
    )
}

export default SignIn