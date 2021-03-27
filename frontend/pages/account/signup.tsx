import React, { useState } from "react";
import { Formik, validateYupSchema } from "formik";
import * as Yup from "yup";
import MyButton from "../../src/components/Button";
import AccountBase from "../../src/components/AccountBase";
import axios from "axios"
import Link from "next/link";
import {CgSpinner} from "react-icons/cg"
import Toast from "../../src/components/Toast";
import {useRouter} from "next/router"

const validationYupSchema = Yup.object({
  password: Yup.string()
    .min(6, "Must be 6 characters or more")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  confirmationPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must Match")
    .required(" Required"),
});


const SignUp:React.FC = ():React.ReactElement => {

  const [result,setResult] = useState({
    success:false,
    loading:false,
    error:false,
  })

  const router = useRouter()


    return (
      <AccountBase signType={"Sign Up"}>
        {
          result.success ? <Toast value="Successfully Created Acount, Redirecting to Login" type="success" /> : ""
        }
        {
          result.error ? <Toast value={"Error Creating Account !"} type="error" hideProgressBar={true} /> : ""
        }
        <Formik
          initialValues={{ email: "", password: "", confirmationPassword: "" }}
          validationSchema={validationYupSchema}
          onSubmit={  (values) => {
              setResult({
                ...result,
                success:false,
                error:false,
                loading:true
              })

              let data = {
                email: values.email,
                password:values.password
              }
              console.log(JSON.stringify(data))
              axios.post(`${process.env.API}/signup`, JSON.stringify(data), {
                headers:{
                  'Content-Type': 'application/json'
                  }
              })
              .then( res => {
                setResult({...result, success:true, error:false, loading:false})
                setTimeout(()=>{
                  router.push('/account/signin')
                },3000)
                console.log(res)

              })
              .catch( err =>{
                setResult({...result, error:true, success:false, loading:false})
                console.log(err.error)
               
              })

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
                  <div className="text-sm text-red-500">
                    * {formik.errors.email}
                  </div>
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
                  <div className="text-sm text-red-500">
                    * {formik.errors.password}
                  </div>
                ) : null}
              </div>

              {/* password conformation */}

              <div className="mb-6">
                <label className="block text-xs mb-1">
                  Password Confirmation:
                </label>
                <input
                  className="block border w-full py-3  px-2"
                  type="password"
                  id="confirmationPassword"
                  {...formik.getFieldProps("confirmationPassword")}
                  placeholder="Enter password..."
                />
                {formik.touched.confirmationPassword &&
                formik.errors.confirmationPassword ? (
                  <div className="text-sm text-red-500">
                    * {formik.errors.confirmationPassword}
                  </div>
                ) : null}
              </div>

              <MyButton
                type="outline"
                display="block"
                style="border w-full mb-6"
              >
                <div className=" w-full h-6 flex justify-center items-center">
                  {
                    result.loading ? <span className="animate-spin text-lg mr-1 "><CgSpinner /></span> : ""
                  }
                 Sign Up
                </div>
                
              </MyButton>
            </form>
          )}
        </Formik>
      </AccountBase>
    
  );
};

export default SignUp;
