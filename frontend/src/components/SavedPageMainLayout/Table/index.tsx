import React from 'react'
import {MdDelete} from "react-icons/md"
import {RiSlideshowFill} from "react-icons/ri"


type propType = {
    data:any
}

let data1 = [
    {
        productDetails : {
            id:"5345trgtdfg",
            name: "Samsung Galaxy S21 5G (Phantom Gray, 8GB, 128GB Storage)",
            total_rating:3000,
            total_reviews:300,
            source:"Amazon",
            link:"https://www.amazon.in/Samsung-Phantom-Storage-Additional-Exchange/dp/B08LRGCNDP/ref=sr_1_4?crid=LLGW980X8I2D&dchild=1&keywords=s21&qid=1615037672&sprefix=s2%2Caps%2C303&sr=8-4",
            img:"https://images-na.ssl-images-amazon.com/images/I/91BGpV19r0L._SL1500_.jpg"
        },
        sentimentDetails : [
            {
                "id":"positive",
                "label":"Positive",
                "value":200,
            },
            {
                "id":"negative",
                "label":"Negative",
                "value":"60",
            },
            {
                "id":"Neutral",
                "label":"Neutral",
                "value":"40",
            },
        ],
        highlightDetails: {
            positive:["Great Sound","battery","sleek design","clear voice","comfortable"],
            negative:["Connectivity issues","noice cancelation","broken battery cable","short range"]
        }
    } ,
    {
        productDetails : {
            id:"12wsdfret",
            name: "Samsung Galaxy S21 5G (Phantom Gray, 8GB, 128GB Storage)",
            total_rating:3000,
            total_reviews:300,
            source:"Amazon",
            link:"https://www.amazon.in/Samsung-Phantom-Storage-Additional-Exchange/dp/B08LRGCNDP/ref=sr_1_4?crid=LLGW980X8I2D&dchild=1&keywords=s21&qid=1615037672&sprefix=s2%2Caps%2C303&sr=8-4",
            img:"https://images-na.ssl-images-amazon.com/images/I/91BGpV19r0L._SL1500_.jpg"
        },
        sentimentDetails : [
            {
                "id":"positive",
                "label":"Positive",
                "value":200,
            },
            {
                "id":"negative",
                "label":"Negative",
                "value":"60",
            },
            {
                "id":"Neutral",
                "label":"Neutral",
                "value":"40",
            },
        ],
        highlightDetails: {
            positive:["Great Sound","battery","sleek design","clear voice","comfortable"],
            negative:["Connectivity issues","noice cancelation","broken battery cable","short range"]
        }
    } ,
    {
        productDetails : {
            id:"sde45rg",
            name: "Samsung Galaxy S21 5G (Phantom Gray, 8GB, 128GB Storage)",
            total_rating:3000,
            total_reviews:300,
            source:"Amazon",
            link:"https://www.amazon.in/Samsung-Phantom-Storage-Additional-Exchange/dp/B08LRGCNDP/ref=sr_1_4?crid=LLGW980X8I2D&dchild=1&keywords=s21&qid=1615037672&sprefix=s2%2Caps%2C303&sr=8-4",
            img:"https://images-na.ssl-images-amazon.com/images/I/91BGpV19r0L._SL1500_.jpg"
        },
        sentimentDetails : [
            {
                "id":"positive",
                "label":"Positive",
                "value":200,
            },
            {
                "id":"negative",
                "label":"Negative",
                "value":"60",
            },
            {
                "id":"Neutral",
                "label":"Neutral",
                "value":"40",
            },
        ],
        highlightDetails: {
            positive:["Great Sound","battery","sleek design","clear voice","comfortable"],
            negative:["Connectivity issues","noice cancelation","broken battery cable","short range"]
        }
    } ,
    {
        productDetails : {
            id:"dsfdfgfgf",
            name: "Samsung Galaxy S21 5G (Phantom Gray, 8GB, 128GB Storage)",
            total_rating:3000,
            total_reviews:300,
            source:"Amazon",
            link:"https://www.amazon.in/Samsung-Phantom-Storage-Additional-Exchange/dp/B08LRGCNDP/ref=sr_1_4?crid=LLGW980X8I2D&dchild=1&keywords=s21&qid=1615037672&sprefix=s2%2Caps%2C303&sr=8-4",
            img:"https://images-na.ssl-images-amazon.com/images/I/91BGpV19r0L._SL1500_.jpg"
        },
        sentimentDetails : [
            {
                "id":"positive",
                "label":"Positive",
                "value":200,
            },
            {
                "id":"negative",
                "label":"Negative",
                "value":"60",
            },
            {
                "id":"Neutral",
                "label":"Neutral",
                "value":"40",
            },
        ],
        highlightDetails: {
            positive:["Great Sound","battery","sleek design","clear voice","comfortable"],
            negative:["Connectivity issues","noice cancelation","broken battery cable","short range"]
        }
    } 
]

const SavedTable :React.FC<propType> = ({data}):React.ReactElement => {
    return (
        <div className="overflow-auto h-screen mt-14 ">
            <table className="min-w-table-min-width">
                <tr className="h-12 bg-primaryPink text-gray-50">
                    <th className="p-2">Sr. No</th>
                    <th className="p-2">Product</th>
                    <th className="p-2">Source</th>
                    <th className="p-2" colSpan={2} >Action</th>
                </tr>
                {
                    data1.map((row,id)=>{
                        return (
                            <tr className="border-b  h-12 odd:bg-secondaryPink border-pink-200 dark:border-gray-700">
                                <td className="border-l border-pink-200 dark:border-gray-700 p-2 px-6">{id+1}</td>
                                <td className="border-l border-pink-200 dark:border-gray-700 p-2 px-6">{row.productDetails.name}</td>
                                <td className="border-l border-pink-200 dark:border-gray-700 p-2 px-6">{row.productDetails.source}</td>
                                <td className="border-l border-pink-200 dark:border-gray-700 p-2 px-6 text-xl hover:"><MdDelete/></td>
                                <td className="border-l border-pink-200 dark:border-gray-700 p-2 px-6 text-xl hover:"><RiSlideshowFill/></td>
                            </tr>                       
                            )
                    })
                }
                
            </table>
        </div>
    )
}

export default SavedTable