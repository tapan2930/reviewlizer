import React from "react";

interface rowType  {
    img:string,
    name:string,
    source:string,
    link:string
}

interface props {
    products:Array<rowType>
}


const GridTable = ({products}:props)=>{
    return (
        <div className="my-6">
           
                {
                    products.map((product,idx)=>{
                        const {name,source,link,img} = product
                        return (
                            <div className="flex mb-2 items-center">
                            <div className="mr-2"><img className=" w-8 " src={img} alt="img"/></div>
                            <div className="mr-2"><h2>{name}</h2></div>
                            <div className="mr-2 text-sm font-light"><p>({source}) : </p></div>
                            <div><a className="text-primaryPink font-light italic text-sm underline" href={`${link}`} >Link</a></div>
                        </div>
                        )
                    })
                }
                
        </div>
    )
}

export default GridTable