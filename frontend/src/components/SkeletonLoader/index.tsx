import React from "react"

type propType = {
    type:string
}

const skeleton:React.FC<propType> = ({type,children}):React.ReactElement =>{
    let typeStyle = getTypeStyle(type)
    return(
        <div className="bg-light-blue-400 rounded border"> 
            {children}
        </div>
    )
}

const getTypeStyle = (type:string)=>{
    switch(type.toLowerCase()){
        case "text": return("h-4 bg-light-blue-400 rounded w-3/4");
        case "round": return("rounded-full bg-light-blue-400 h-12 w-12");
    }
}

export default skeleton