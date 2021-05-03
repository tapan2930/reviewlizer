import React, { useState } from "react";
import Router from "next/router";
import { AiOutlineSearch } from "react-icons/ai";
import * as ValidUrl from "valid-url"
import {generate} from "shortid"

import { showAnalysis, useOnSeachData, userInfo, useSearchValue, useSkeleton } from "../../store/globalStore";
  
type propType = {
    onSearch?: (data) => void,
    showAnlaysisHandler?: (value) => void
}

const SearchBar:React.FC<propType> = ():React.ReactElement => {
  const setSkeletonLoading = useSkeleton(state => state.toggle)
  const searchValue = useSearchValue((state) => state.searchValue);
  const setSearchValue = useSearchValue((state) => state.setSearchValue);
  const setData = useOnSeachData(state => state.setData)
  const setShowAnalaysis = showAnalysis(state => state.toggle)
  const [isUrl,setIsUrl] = useState(true)
  const addToHistory = userInfo(state => state.addHistory)


  const onSearchButtonHandler = async () => {

    if(ValidUrl.isUri(searchValue)){
      setIsUrl(true)
      if (searchValue) {
        const route = Router.pathname;
        if (route === "/dashboard") {
          Router.push("/dashboard/analysis");
        }
        
      await addToHistory(searchValue)  
  
        setShowAnalaysis(false)
        setSkeletonLoading(true)
  
        await setTimeout(()=>{
            console.log("waiting....getting data")
            let data = TesterFunction(); 
              setData(data)
              
              setShowAnalaysis(true)
              setSkeletonLoading(false)
            console.log("got data")  
          },6000)
      }
    }else{
      setIsUrl(false)
    }
    
    
  };

  return (
    <>
    <div className="flex">
    <input
        className="outline-none  py-4 px-4 w-full bg-secondaryPink inline-block "
        type="text"
        value={searchValue}
        placeholder="Insert Product link ..."
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button
        onClick={() => onSearchButtonHandler()}
        className="bg-primaryPink text-gray-50 py-4 px-6 flex items-center"
      >
        <span className=" text-xl inline sm:mr-2 ">
          <AiOutlineSearch />
        </span>
        <span className="hidden sm:inline "> Search </span>{" "}
      </button>
    </div>

      <div className="text-red-500 h-8">
      {
        isUrl ? "":  "* Please Enter Valid Url"
      }
      </div>
     
    </>
  );
};

const TesterFunction = () => {
    let data = {
        id:null,
        productDetails : {
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

    return data;
};

export default SearchBar;
