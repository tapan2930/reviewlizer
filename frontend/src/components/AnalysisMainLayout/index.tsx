import React, { useState } from "react";
import Analaysis from "../../../pages/dashboard/analysis";
import SearchBar from "../SearchBar";
import HighlightContainer from "./HighlightContainer";
import ProductDetails from "./ProductDetails";
import SentimentAnalysisContainer from "./SentimentAnalysis";

const AnalysisMainLayout = () => {
  const [data, setData] = useState(null);
  let onSearchHandler = async (dataSearch) => {
    await setData(dataSearch);
  };
  return (
    <div>
      <div className="flex items-center justify-center my-16">
        <div className="w-full sm:w-8/12 flex">
          <SearchBar onSearch={onSearchHandler} />
        </div>
      </div>

      {/* Display after press search */}
      <main  className="container">
        <section className=" my-24">
          {/* Product Details component */}
          {data && (
            <div >
              <h1 className="text-lg font-bold border-primaryPink border-b-2 inline-block">
                Product Details:
              </h1>
              <ProductDetails {...data.productDetails} />
            </div>
          )}
        </section>

        <section className="my-24">
          {/* Sentiment Analysis */}
          {data && (
            <div >
              <h1 className="text-lg font-bold border-primaryPink border-b-2 inline-block">
                Sentiment Details:
              </h1>
              <SentimentAnalysisContainer sentimentDetails = {data.sentimentDetails} />
            </div>
          )}
        </section>
     
        <section className="my-24"> {/* Highlight Section */}
            {data && (
              <div>
                <h1 className="text-lg font-bold border-primaryPink border-b-2 inline-block">
                Factual Details:
              </h1>
                <HighlightContainer highlightDetails = {data.highlightDetails} />
              </div>
            )}
        </section>
      </main>
    </div>
  );
};

export default AnalysisMainLayout;
