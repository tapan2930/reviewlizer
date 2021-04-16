import React from 'react'
import { useState } from 'react'
import {MdDelete} from "react-icons/md"
import {RiSlideshowFill} from "react-icons/ri"
import {productDetailsType} from "../../../types/userInfo.types"

type propType = {
    savedProducts: Array<productDetailsType>
}


const SavedTable :React.FC<propType> = ({savedProducts}):React.ReactElement => {
    let dataArr = savedProducts.map(data=>{
        return data.productDetails
    })
    
    const [productInfoArr, setProductInfoArr] = useState(dataArr)
    return (
        <div className="overflow-auto h-screen pt-14 ">
            <table className="min-w-table-min-width border border-pink-200">
                <tr className="h-12 bg-primaryPink text-gray-50">
                    <th className="p-2">Sr. No</th>
                    <th className="p-2">Product</th>
                    <th className="p-2">Source</th>
                    <th className="p-2" colSpan={2} >Action</th>
                </tr>
                {
                    productInfoArr.map((row,id)=>{
                        return (
                            <tr className="border-b  h-12 odd:bg-secondaryPink border-pink-200 dark:border-gray-700">
                                <td className="border-l border-pink-200 dark:border-gray-700 p-2 px-6">{id+1}</td>
                                <td className="border-l border-pink-200 dark:border-gray-700 p-2 px-6">{row.name}</td>
                                <td className="border-l border-pink-200 dark:border-gray-700 p-2 px-6"><a href={row.link} className="border-dotted border-b border-primaryPink text-sm">{row.source}</a></td>
                                <td className="cursor-pointer border-l border-pink-200 dark:border-gray-700 p-2 px-6 text-xl hover:bg-gray-800 hover:text-gray-50 transition-all duration-200"><MdDelete/></td>
                                <td className="cursor-pointer border-l border-pink-200 dark:border-gray-700 p-2 px-6 text-xl hover:bg-gray-800 hover:text-gray-50 transition-all duration-200"><RiSlideshowFill/></td>
                            </tr>                       
                        )
                    })
                }
            </table>         
        </div>
    )
}

export default SavedTable