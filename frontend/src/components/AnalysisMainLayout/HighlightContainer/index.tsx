import React from "react"
import {AiOutlineStar} from "react-icons/ai"
import ScrollableContainer from "./ScrollableContainer"

type highlightDetailsType = {
    positive:Array<string>,
    negative:Array<string>,
}

type propType = {
    highlightDetails:highlightDetailsType
}

const HighlightContainer:React.FC<propType> = ({highlightDetails}):React.ReactElement =>{
    return(
        <div className="rounded-lg my-6 overflow-hidden shadow-md border-2 border-gray-200 bg-gray-100 dark:bg-d-secondary dark:border-gray-700 p-4 md:p-10 ">
            <div className="text-center"> <h1 className="text-lg font-semibold border-b-2 border-primaryPink inline-flex items-center pb-2 px-2 "> <span className="text-2xl bg-secondaryPink rounded-lg p-1 text-primaryPink mr-2"><AiOutlineStar /></span> Highlights from Reviews: </h1> </div>
            <div className="flex flex-col mt-6 md:flex-row md:justify-around">
                <div className="text-center md:mr-3 flex-1">
                    <h2 className=" mb-2 md:text-lg font-semibold">Liked :</h2>
                    <ScrollableContainer highlights = {highlightDetails.positive} />
                </div>
                <div className="mt-6 md:mt-0 text-center flex-1">
                    <h2 className=" mb-2 md:text-lg font-semibold">Disliked</h2>
                    <ScrollableContainer highlights = {highlightDetails.negative} />
                </div>
            </div>
        </div>
    )
}

export default HighlightContainer