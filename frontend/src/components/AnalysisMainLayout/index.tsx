import React, { useState } from "react";
import Analaysis from "../../../pages/dashboard/analysis";
import SearchBar from "../SearchBar";
import HighlightContainer from "./HighlightContainer";
import ProductDetails from "./ProductDetails";
import SentimentAnalysisContainer from "./SentimentAnalysis";
import  {useSkeleton} from "../../store/globalStore"


const skeleton = <svg width="632" height="356" viewBox="0 0 632 356" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="skeleton">
<rect id="skeleton-items" x="366" y="45" width="160" height="33" rx="16" fill="#F21868" fill-opacity="0.1"/>
<rect id="skeleton-items_2" x="291" y="111" width="300" height="13" rx="6.5" fill="#F21868" fill-opacity="0.1"/>
<rect id="skeleton-items_3" x="291" y="158" width="300" height="13" rx="6.5" fill="#F21868" fill-opacity="0.1"/>
<rect id="skeleton-items_4" x="291" y="135" width="300" height="13" rx="6.5" fill="#F21868" fill-opacity="0.1"/>
<rect id="skeleton-items_5" x="291" y="205" width="300" height="13" rx="6.5" fill="#F21868" fill-opacity="0.1"/>
<rect id="skeleton-items_6" x="291" y="181" width="300" height="13" rx="6.5" fill="#F21868" fill-opacity="0.1"/>
<rect id="skeleton-items_7" x="291" y="252" width="300" height="13" rx="6.5" fill="#F21868" fill-opacity="0.1"/>
<rect id="skeleton-items_8" x="291" y="229" width="300" height="13" rx="6.5" fill="#F21868" fill-opacity="0.1"/>
<rect id="skeleton-items_9" x="291" y="298" width="300" height="14" rx="7" fill="#F21868" fill-opacity="0.1"/>
<rect id="skeleton-items_10" x="291" y="274" width="300" height="14" rx="7" fill="#F21868" fill-opacity="0.1"/>
<circle id="skeleton-items_11" cx="151.5" cy="170.5" r="94.5" fill="#F21868" fill-opacity="0.1"/>
<rect id="skeleton-items_12" x="65" y="284" width="33" height="24" rx="8" fill="#F21868" fill-opacity="0.1"/>
<rect id="skeleton-items_13" x="129" y="284" width="33" height="24" rx="8" fill="#F21868" fill-opacity="0.1"/>
<rect id="skeleton-items_14" x="193" y="284" width="33" height="24" rx="8" fill="#F21868" fill-opacity="0.1"/>
<rect x="0.5" y="0.5" width="631" height="355" rx="15.5" stroke="#F21868" stroke-opacity="0.3"/>
</g>
</svg>



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
