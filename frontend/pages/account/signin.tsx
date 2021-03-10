import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { HiArrowNarrowLeft } from "react-icons/hi";
import MyButton from "../../src/components/Button";
import Router from "next/router"
import AccountBase from "../../src/components/AccountBase/index"


const validationYupSchema = Yup.object({
  password: Yup.string()
    .min(6, "Must be 6 characters or more")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
});




const SignIn: React.FC = (): React.ReactElement => {
  return (
      <AccountBase  signType={"Sign In"} > 
      <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationYupSchema}
      onSubmit={() => {
        console.log("sign in");
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

          <MyButton type="outline" display="block" style="border w-full mb-6">
            {" "}
            Sign In{" "}
          </MyButton>
        </form>
      )}
    </Formik>
      </AccountBase>
  );
};


export default SignIn;
