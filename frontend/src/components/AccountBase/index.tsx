import React from "react";
import { HiArrowNarrowLeft } from "react-icons/hi";
import Router from "next/router"

type propType = {
  signType:string
}

const AccountBase: React.FC<propType> = ({signType,children}): React.ReactElement => {
  return (
    <div className="container h-screen overflow-y-hidden">
      <div onClick={()=>{ Router.push("/")}} className="inline-flex fixed top-0   cursor-pointer items-center font-semibold text-sm p-2 text-gray-800">
        <span className="mr-2 text-lg ">
          <HiArrowNarrowLeft />
        </span>
        <span>Back To Home</span>
      </div>
      <div className="flex justify-center sm:items-center h-full">
        <div
          style={{ maxWidth: "486px", width: "486px" }}
          className="px-3 py-12 md:px-12 flex flex-col md:border md:rounded-lg"
        >
          <div className="mx-auto">
            <img
              className="w-12"
              src="/assets/images/logo.color.png"
              alt="logo"
            />
          </div>
          <div className="w-full text-center my-6">
            <span className="block mb-2">{signType} to continue with</span>
            <span className=" font-semibold text-primaryPink tracking-wide border-b-4 border-secondaryPink">
              Reviewlizer
            </span>
          </div>
          <div className="mt-12">
            {children}
          </div>
          {
              signType === "Sign In" ? (
                <div>
                <p className="text-sm ">
                  Don’t Have Account ?{" "}
                  <span onClick={()=>{Router.push("/account/signup")}} className=" cursor-pointer text-primaryPink">Create Account</span>
                </p>
              </div>
              ) :
              (
                <div>
                <p className="text-sm ">
                  Already Have Account ?{" "}
                  <span onClick={()=>{Router.push("/account/signin")}} className=" cursor-pointer text-primaryPink">Sign In</span>
                </p>
              </div>
              )
          }
        </div>
      </div>
    </div>
  );
};

export default AccountBase