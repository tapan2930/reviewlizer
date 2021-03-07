import React from "react";
import Router from "next/router";
import { AiOutlineSearch } from "react-icons/ai";

import { useSearchValue } from "../../store/globalStore";
  
type propType = {
    onSearch?: (data) => void
}

const SearchBar:React.FC<propType> = ({onSearch}):React.ReactElement => {
  const searchValue = useSearchValue((state) => state.searchValue);
  const setSearchValue = useSearchValue((state) => state.setSearchValue);
  const onSearchButtonHandler = async () => {
    if (searchValue) {
      const route = Router.pathname;
      if (route === "/dashboard") {
        Router.push("/dashboard/analysis");
      }
    
      await setTimeout(()=>{
          console.log("waiting....getting data")
          let data = TesterFunction(); 
          onSearch(data) 
          console.log("got data")  
        },1000)
    }
  };

  return (
    <>
      <input
        className="outline-none hover:outline-none py-4 px-4 w-full  inline-block bg-secondaryPink"
        type="text"
        value={searchValue}
        placeholder="Search..."
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button
        onClick={() => onSearchButtonHandler()}
        className="bg-primaryPink text-gray-50 py-4 px-6"
      >
        <span className=" text-lg inline sm:hidden">
          <AiOutlineSearch />
        </span>
        <span className="hidden sm:inline "> Search </span>{" "}
      </button>
    </>
  );
};

const TesterFunction = () => {
    let data = {
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
