import React from "react";
import { Formik, validateYupSchema } from "formik";
import * as Yup from "yup";
import { HiArrowNarrowLeft } from "react-icons/hi";
import MyButton from "../../src/components/Button";
import Router from "next/router"


const validationYupSchema = Yup.object({
  password: Yup.string()
    .min(6, "Must be 6 characters or more")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  confirmationPassword: Yup.string().oneOf([Yup.ref('password'), null], "Passwords must Match").required(" Required")
});

const SignUp: React.FC = (): React.ReactElement => {
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
            <span className="block mb-2">Sign Up to continue with</span>
            <span className=" font-semibold text-primaryPink tracking-wide border-b-4 border-secondaryPink">
              Reviewlizer
            </span>
          </div>
          <div className="mt-12">
            {signInForm()}
          </div>
          <div>
            <p className="text-sm ">
              Already Have Account ?{" "}
              <span onClick={()=>{Router.push("/account/signin")}} className=" cursor-pointer text-primaryPink">Sign In</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const signInForm = () => {
  return (
    <Formik
      initialValues={{ email: "", password: "", confirmationPassword:"" }}
      validationSchema={validationYupSchema}
      onSubmit={() => {
        console.log("sign up");
      }}
    >
      {(formik) => (
        <form onSubmit={formik.handleSubmit}>
          {/* Email field */}
          <div className="mb-4">
            <label className="block text-xs mb-1 ">Email Id:</label>
            <input
              className="block border w-full py-3 px-2"
              id={"email"}
              type="text"
              {...formik.getFieldProps("email")}
              placeholder="Enter Email id..."
            />
            {formik.touched.email && formik.errors.email ? (
             <div className="text-sm text-red-500">* {formik.errors.email}</div>
           ) : null}
          </div>

          {/* password field */}
          <div className="mb-6">
            <label className="block text-xs mb-1">Password:</label>
            <input
              className="block border w-full py-3  px-2"
              type="password"
              id="password"
              {...formik.getFieldProps("password")}
              placeholder="Enter password..."
            />
            {formik.touched.password && formik.errors.password ? (
             <div className="text-sm text-red-500">* {formik.errors.password}</div>
           ) : null}
          </div>

          {/* password conformation */}

          <div className="mb-6">
            <label className="block text-xs mb-1">Password Confirmation:</label>
            <input
              className="block border w-full py-3  px-2"
              type="password"
              id="confirmationPassword"
              {...formik.getFieldProps("confirmationPassword")}
              placeholder="Enter password..."
            />
            {formik.touched.confirmationPassword && formik.errors.confirmationPassword ? (
             <div className="text-sm text-red-500">* {formik.errors.confirmationPassword}</div>
           ) : null}
          </div>

          <MyButton type="outline" display="block" style="border w-full mb-6">
            {" "}
            Sign Up{" "}
          </MyButton>
        </form>
      )}
    </Formik>
  );
};

export default SignUp;
