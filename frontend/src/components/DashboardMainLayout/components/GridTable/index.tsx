import React from "react";


const GridTable = ({products})=>{
    console.log(products)
    return (
        <div className="my-6">
           
                {
                    products.map((product)=>{
                        const {name,source,link,img,id} = product.productDetails
                        return (
                            <div className="flex mb-2 items-center" id = {id} >
                            <div className="mr-2"><img className="w-8" src={img} alt="img"/></div>
                            <div className="mr-2 max-w-xs h-6 overflow-x-hidden"><h2>{name}</h2></div>
                            <div className="mr-2 text-sm font-light flex-none"><p>({source}) : </p></div>
                            <div><a className="text-primaryPink font-light italic text-sm underline" href={`${link}`} >Link</a></div>
                        </div>
                        )
                    })
                }
        </div>
    )
}

export default GridTable