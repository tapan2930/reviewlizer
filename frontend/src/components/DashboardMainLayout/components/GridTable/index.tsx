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
                                <div><div className="mr-2 flex-none"><img className="w-8" src={img} alt="img"/></div></div>
                                <div className="flex flex-col md:flex-row" >
                                    <div className="mr-2  h-6 flex"><h2>{name.slice(0,35)}{name.length > 35 ? "...": ""}</h2></div>
                                    <div className="flex items-center">
                                        <div className="mr-2 text-sm font-light flex-none"><p>({source}) : </p></div>
                                        <div><a className="text-primaryPink font-light italic text-sm underline" href={`${link}`} >Link</a></div>
                                    </div>
                                    
                                </div>
                           
                            
                        </div>
                        )
                    })
                }
        </div>
    )
}

export default GridTable