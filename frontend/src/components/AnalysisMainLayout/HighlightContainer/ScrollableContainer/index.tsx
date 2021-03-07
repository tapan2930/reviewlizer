import React from "react"


type propType = {
    highlights:Array<string>
}

const ScrollableContainer:React.FC<propType> = ({highlights}):React.ReactElement =>{
    return(
        <div style={{height:"240px", minWidth:"300px" ,"overflowY":"auto"}} className=" text-sm md:text-base border-2 rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-900">
            {
                highlights.map((value:string,idx)=>{
                    return (
                        <div className="h-12 odd:bg-secondaryPink items-center pl-4 flex" id={`${idx}`}>{value}</div>
                    )
                })
            }
        </div>
    )
}

export default ScrollableContainer