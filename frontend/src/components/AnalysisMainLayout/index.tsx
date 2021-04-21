import React, { useState } from "react";
import SearchBar from "../SearchBar";
import HighlightContainer from "./HighlightContainer";
import ProductDetails from "./ProductDetails";
import SentimentAnalysisContainer from "./SentimentAnalysis";
import  {useSkeleton, useOnSeachData, showAnalysis, userInfo} from "../../store/globalStore"
import {AiFillStar,AiOutlineStar} from "react-icons/ai"
import { useRouter } from "next/router";
import { useEffect } from "react";
import { on } from "cluster";


const AnalysisMainLayout = () => {
  const data = useOnSeachData(state => state.data)
  const isLoading = useSkeleton(state => state.loading)
  const showAnlaysis = showAnalysis(state => state.show)
  const [isSaved, setIsSaved] = useState(false)
  const router = useRouter()
  const {saved} = router.query
  console.log(saved)

  return (
    <div className="container">
      <div className="flex items-center justify-center my-16">
        <div className="w-full flex flex-col">
          <SearchBar />
        </div>
      </div>

      {/* Display after press search */}
      <main>
        {
          isLoading && skeleton
        }
        {
          console.log(showAnlaysis)
        }
      {
        showAnlaysis && <DataLayout data={data}  saved = {(saved === "true")} />
      }
      </main>
    </div>
  );
};


const skeleton = <div className="animate-pulse flex w-full border dark:border-gray-600 rounded-md p-6 ">
  <div className="w-full flex flex-col justify-center ">
    <div className="w-24 h-24 md:h-48 md:w-48 rounded-full bg-gray-300 dark:bg-gray-400 mx-auto mb-6"></div>
    <div className="flex flex-row justify-around">
      <div className="w-full mr-2 h-6 md:h-8 rounded-sm bg-gray-300 dark:bg-gray-400"></div>
      <div className="w-full mr-2 h-6 md:h-8 rounded-sm bg-gray-300 dark:bg-gray-400"></div>
      <div className="w-full mr-2 h-6 md:h-8 rounded-sm bg-gray-300 dark:bg-gray-400"></div>
    </div>
  </div>
  <div className="w-full flex flex-col justify-between px-6">
    <div className="w-full h-6 md:h-12 rounded-md bg-gray-300 dark:bg-gray-400 mb-1"></div>
    <div className="w-full h-6 md:h-12 rounded-md bg-gray-300 dark:bg-gray-400 mb-1"></div>
    <div className="w-full h-6 md:h-12 rounded-md bg-gray-300 dark:bg-gray-400 mb-1"></div>
    <div className="w-full h-6 md:h-12 rounded-md bg-gray-300 dark:bg-gray-400 mb-1"></div>
  </div>
</div>

const savedTrue = () => (
        <div className="shadow-xl bg-white dark:bg-gray-800 fixed right-20 bottom-20 p-3 rounded-xl text-sm font-bold w-24">
         <div className="flex items-center cursor-pointer"><span className="mr-2 text-lg text-primaryPink"><AiFillStar /></span> Saved </div>
        </div>)

const saveFalse = () =>(
  <div className="shadow-xl bg-white dark:bg-gray-800 fixed right-20 bottom-20 p-3 rounded-xl text-sm font-bold w-24">
  <div className="flex items-center cursor-pointer"><span className="mr-2 text-lg text-primaryPink"><AiOutlineStar /></span> Save </div>
 </div>
)

const DataLayout = ({data, saved = false})=>{
  const [isSaved, setIsSaved] = useState(saved)
  const addToSave = userInfo(state => state.addSaved)
  const removeFromSave = userInfo(state => state.deleteSaved)
  const onSaveClickHandler = () =>{
    setIsSaved(!isSaved)
    if(isSaved){
      addToSave(data).then((res)=>{
        console.log("added")
      })
    }else {
      removeFromSave(data.id)
    }
  }
  return (
  <div>
      <div onClick={onSaveClickHandler} className="cursor-pointer">
        {
          isSaved ? savedTrue() : saveFalse()
        }
      </div>
       
  <section className=" my-24">
  {/* Product Details component */}
  <h1 className="text-lg font-bold border-primaryPink border-b-2 inline-block mb-2">
        Product Details:
      </h1>
    <div >
      <ProductDetails {...data.productDetails} />
    </div>
</section>


<section className="my-24">
  {/* Sentiment Analysis */}
  <h1 className="text-lg font-bold border-primaryPink border-b-2 inline-block mb-2">
        Sentiment Details:
      </h1>
    <div >
      <SentimentAnalysisContainer sentimentDetails = {data.sentimentDetails} />
    </div>
</section>

<section className="my-24"> {/* Highlight Section */}
      <div>
        <h1 className="text-lg font-bold border-primaryPink border-b-2 inline-block">
        Factual Details:
      </h1>
        <HighlightContainer highlightDetails = {data.highlightDetails} />
      </div>
</section>
</div>
)
  }

export default AnalysisMainLayout;
