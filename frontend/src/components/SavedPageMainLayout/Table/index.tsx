import React from 'react'
import { useState } from 'react'
import {MdDelete} from "react-icons/md"
import {RiSlideshowFill} from "react-icons/ri"
import  ReactTooltip from "react-tooltip";
import { userInfo } from '../../../store/globalStore'
import { useEffect } from 'react'
import ProgressBar from "@badrap/bar-of-progress"
import { useRouter } from 'next/router';


const deleteLoadingBar = new ProgressBar({
    size: 4,
    color: "rgba(110, 231, 183)",
    className: "bar-of-progress",
    delay: 100,
  });


const SavedTable :React.FC = ():React.ReactElement => {
    const savedProducts = userInfo(state => state.userData.savedProducts)
    const deleteSaved = userInfo(state => state.deleteSaved)
    const [productInfoArr, setProductInfoArr] = useState(null)
    const router = useRouter()
    
    const dataArrFun = (savedProducts) =>{
        return  savedProducts.map(data=>{
            let id = data.id
            return {...data.productDetails, id}
        })
    }
    
    // update state when SavedProduct Values change
    useEffect(()=>{
        let dataArr = dataArrFun(savedProducts)
        setProductInfoArr(dataArr)
    }, [])

    const onDeleteHandler = async (productId) =>{
        deleteLoadingBar.start()
        await deleteSaved(productId).then(res=>{
            console.log(savedProducts, res,"table")
            let updatedData = dataArrFun(res)
            console.log()
            setProductInfoArr(updatedData)
            deleteLoadingBar.finish()
        })
    }

    const viewProductButtonHandler = (productId) =>{
        router.push({
            pathname:"/dashboard/analysis",
            query:{
                saved:true,
                pid:productId
            }
        })
    }

    return (
        <div className="overflow-auto pt-14 ">
            {
                productInfoArr && 
            
            <table className="min-w-table-min-width border border-pink-200 dark:border-gray-700">
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
                                <td className="border-l border-pink-200 dark:border-gray-700 p-2 px-6">
                                    <div className="flex items-center">
                                    <img className="w-6 mr-4" src={row.img} alt={row.name} />
                                    {row.name}
                                    </div>
                                    
                                    </td>
                                <td className="border-l border-pink-200 dark:border-gray-700 p-2 px-6"><a href={row.link} className="border-dotted border-b border-primaryPink text-sm">{row.source}</a></td>
                                <td 
                                className="cursor-pointer border-l border-pink-200 dark:border-gray-700 p-2 px-6 text-xl hover:bg-gray-800 hover:text-gray-50 transition-all duration-200" 
                                data-for='remove' 
                                data-tip="Remove"
                                onClick = {()=> onDeleteHandler(row.id)}
                                ><MdDelete/></td>
                                <td 
                                onClick = {()=> viewProductButtonHandler(row.id)}
                                className="cursor-pointer border-l border-pink-200 dark:border-gray-700 p-2 px-6 text-xl hover:bg-gray-800 hover:text-gray-50 transition-all duration-200"
                                data-for='showAnalysis'
                                data-tip="Show Analysis">
                                    <RiSlideshowFill/>
                                </td>
                            </tr>   
                        )
                    })
                }
            </table>  
            }
            <ReactTooltip id="remove" delayShow={500} />                    
            <ReactTooltip id="showAnalysis" delayShow={500} />                    
        </div>
    )
}

export default SavedTable