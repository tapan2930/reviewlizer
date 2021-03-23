import React, { useState } from "react";
import Analaysis from "../../../pages/dashboard/analysis";
import SearchBar from "../SearchBar";
import HighlightContainer from "./HighlightContainer";
import ProductDetails from "./ProductDetails";
import SentimentAnalysisContainer from "./SentimentAnalysis";
import  {useSkeleton} from "../../store/globalStore"


const skeleton = <div className="flex w-full border dark:border-gray-600 rounded-md p-6 ">
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


const AnalysisMainLayout = () => {
  const [data, setData] = useState(null);
  const [showAnlaysis, setShowAnalaysis] = useState(true);
  const isLoading = useSkeleton(state => state.loading)

  let onSearchHandler = async (dataSearch) => {
    await setData(dataSearch);
  };

  let showAnlaysisHandler = () =>{
    setShowAnalaysis(true)
  }

  return (
    <div className="container">
      <div className="flex items-center justify-center my-16">
        <div className="w-full flex">
          <SearchBar onSearch={onSearchHandler} showAnlaysisHandler = {showAnlaysisHandler} />
        </div>
      </div>

      {/* Display after press search */}
      <main  className={`${ showAnlaysis ? "block" : "hidden"}`}>
        <section className=" my-24">
          {/* Product Details component */}
          <h1 className="text-lg font-bold border-primaryPink border-b-2 inline-block mb-2">
                Product Details:
              </h1>
          {(data && !isLoading) ? (
            <div >
              <ProductDetails {...data.productDetails} />
            </div>
          ) :  <div className="animate-pulse">{skeleton}</div>}
        </section>


        <section className="my-24">
          {/* Sentiment Analysis */}
          <h1 className="text-lg font-bold border-primaryPink border-b-2 inline-block mb-2">
                Sentiment Details:
              </h1>
          {(data && !isLoading) ?  (
            <div >
              <SentimentAnalysisContainer sentimentDetails = {data.sentimentDetails} />
            </div>
          ) : <div className="animate-pulse">{skeleton}</div> }
        </section>
     
        <section className="my-24"> {/* Highlight Section */}
            {(data && !isLoading) ? (
              <div>
                <h1 className="text-lg font-bold border-primaryPink border-b-2 inline-block">
                Factual Details:
              </h1>
                <HighlightContainer highlightDetails = {data.highlightDetails} />
              </div>
            ) : <div className="animate-pulse">{skeleton}</div> }
        </section>
      </main>
    </div>
  );
};

export default AnalysisMainLayout;
