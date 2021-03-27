import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import MyButton from "../../src/components/Button";
import AccountBase from "../../src/components/AccountBase/index"
import {} from "../../src/utils/auth/helper"
import router, {useRouter} from "next/router";
import { signIn } from "../../src/utils/auth/helper"
import Toast from "../../src/components/Toast";
import {CgSpinner} from "react-icons/cg"



const validationYupSchema = Yup.object({
  password: Yup.string()
    .min(6, "Must be 6 characters or more")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
});




const SignIn: React.FC = (): React.ReactElement => {
  const router = useRouter()
  const [values,setValues] = useState({
    error: false,
    loading: false,
    success:false,
    errorValue: "Please Check Your Email and Password"
  })

  useEffect(()=>{
    if(values.success){
      
    }
  },[values.success,values.error])



  return (
      <AccountBase  signType={"Sign In"} > 
        {
          values.error ? <Toast value={"Login Failed! Check your Email and Password"} type="error" hideProgressBar={true} /> : ""
        }
      <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationYupSchema}
      onSubmit=  { async (formData) =>  {
        setValues({...values, loading:true, success:true, error:false, errorValue:""})
        await signIn(formData).then(res =>{
          console.log(res)
        
          if(res.status === 200){
            setValues({...values, loading:false, success:true})
            router.push("/dashboard")
          }else{
            setValues({...values,error:true, loading:false, success:false})
          }
         
        }).catch(error=>{
          setValues({...values,error:true, loading:false, success:false})
          console.log("here:",error)
        })
      }
    }
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

          <MyButton
                type="outline"
                display="block"
                style="border w-full mb-6"
              >
                <div className=" w-full h-6 flex justify-center items-center">
                  {
                    values.loading ? <span className="animate-spin text-lg mr-1 "><CgSpinner /></span> : ""
                  }
                 Sign In
                </div>
                
              </MyButton>
        </form>
      )}
    </Formik>
      </AccountBase>
  );
};



export default SignIn;
