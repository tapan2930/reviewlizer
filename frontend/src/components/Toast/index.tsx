import React from 'react'
import { ToastContainer, toast, ToastPosition } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


type propType = {
    value:string,
    position?:ToastPosition,
    time?:number,
    type?:string,
    hideProgressBar?:boolean
}

const Toast = ({value, position = "top-center", time=3000,type="default", hideProgressBar=false}: propType) => {

    switch(type){
        case "success" : toast.success(value);
        break;
        case "error" : toast.error(value);
        break;
        default: toast(value);
        break;
    }

    return <ToastContainer
            position= {position}
            autoClose={time}
            hideProgressBar={hideProgressBar}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
    />
}

export default Toast