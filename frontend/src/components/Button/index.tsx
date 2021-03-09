import React from 'react'

type propType = {
    type?:string,
    display?:string,
    style?:string,
    onclick?:()=>void
}

const MyButton :React.FC<propType> = ({type="primary",display="inline-block",style="", onclick  , children}):React.ReactElement => {
    let typeStyle = (type) =>{
        switch(type){
            case "primary" : return " border-2 bg-primaryPink text-gray-50 ";
            case "outline" : return " border-2 text-primaryPink hover:text-gray-100 hover:bg-primaryPink hover:shadow-md transistion duration-100 ease-in "
        }
    }

    return (
        <button onClick={()=> onclick && onclick()} className={`px-3 py-2 text-sm  border-primaryPink font-base rounded-md ${typeStyle(type)} ${display} ${style}`}>{children}</button>
    )
}

export default MyButton 