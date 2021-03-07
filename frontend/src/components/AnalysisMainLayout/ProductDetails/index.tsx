import * as React from 'react';

type propType = {
    name: string,
    total_rating:number,
    total_reviews:number,
    source:string,
    link:string,
    img:string
}

const ProductDetails:React.FC<propType> = ({name,total_rating,total_reviews,source,link,img}):React.ReactElement =>{
    const productTableData = {
        table:[
        {
            "label":"Name",
            "value": name
        },
        {
            "label": "Total Rating",
            "value":total_rating
        },
        {
            "label": "Total Reviews",
            "value": total_reviews
        },
        {
            "label": "Source",
            "value": <a href={link}>{source}</a>
        }],
    }

    return (
        <div className="flex flex-col md:flex-row my-4">
            <div className="  rounded-md text-gray-50 dark:text-gray-400  text-center w-full md:w-auto mb-4 md:mr-4">
                <img className=" text-center mx-auto" width="240px" src={img} alt={name} />
            </div>
            <div className="overflow-x-auto">
                <table>
                    {
                        productTable(productTableData.table)
                    }

                </table>
            </div>
            
        </div>
    )
}

const productTable = (table):React.ReactElement=>{
    return  table.map((row,idx)=>{
        return(
            <tr id={`${idx}`} className="odd:bg-secondaryPink">
                <th style={{"minWidth":"148px"}} className="text-left p-4">{row.label} :</th>
                <td style={{"minWidth":"364px"}} className="p-4" ><div>{row.value}</div></td>
            </tr>
        )
    })
}

export default ProductDetails