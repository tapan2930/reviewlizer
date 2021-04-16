import React, {useState} from 'react';
import SearchBar from '../SearchBar';
import GridTable from './components/GridTable';


const Saved = {
    title : "Saved",
    products : [
        {
            name: "Oneplus Wireless Earbuds",
            source: "Amazon",
            img: "https://via.placeholder.com/150",
            link: "https://pateltapan.com/projects"
        },
        {
            name: "Oneplus Wireless Earbuds",
            source: "Amazon",
            img: "https://via.placeholder.com/150",
            link: "https://pateltapan.com/projects"
        },
        {
            name: "Oneplus Wireless Earbuds",
            source: "Amazon",
            img: "https://via.placeholder.com/150",
            link: "https://pateltapan.com/projects"
        },
        {
            name: "Oneplus Wireless Earbuds",
            source: "Amazon",
            img: "https://via.placeholder.com/150",
            link: "https://pateltapan.com/projects"
        },
        {
            name: "Oneplus Wireless Earbuds",
            source: "Amazon",
            img: "https://via.placeholder.com/150",
            link: "https://pateltapan.com/projects"
        },        
        {
            name: "Oneplus Wireless Earbuds",
            source: "Amazon",
            img: "https://via.placeholder.com/150",
            link: "https://pateltapan.com/projects"
        }
    ]
}

const previouslySearched = {
    title : "Previously Searched",
    products : [
        {
            name: "Oneplus Wireless Earbuds",
            source: "Amazon",
            img: "https://via.placeholder.com/150",
            link: "https://pateltapan.com/projects"
        },
        {
            name: "Oneplus Wireless Earbuds",
            source: "Amazon",
            img: "https://via.placeholder.com/150",
            link: "https://pateltapan.com/projects"
        },
        {
            name: "Oneplus Wireless Earbuds",
            source: "Amazon",
            img: "https://via.placeholder.com/150",
            link: "https://pateltapan.com/projects"
        },
        {
            name: "Oneplus Wireless Earbuds",
            source: "Amazon",
            img: "https://via.placeholder.com/150",
            link: "https://pateltapan.com/projects"
        }
    ]
}

const DashboardMainLayout = ({userInfo}) => {
    
    return (
        <div className="h-full">
            <div className="flex container items-center justify-center my-16">
                <div className="w-full flex flex-col">
                   <SearchBar onSearch = {null} />
                </div>
            </div>
            {showSavedAndHistory(userInfo)}
            
        </div>
    )
}

const showSavedAndHistory = (userInfo)=>{

    let showSaved = userInfo ? (userInfo.savedProducts.length) : false
    let showHistory = userInfo ? (userInfo.recentlySearchedProducts.length ) : false
    console.log(userInfo)

    return (showSaved || showHistory ) ? <> 
    <div className="grid grid-cols-1 md:grid-cols-2 pt-8">
            {
                showSaved ?  <div  className="flex flex-col items-center"> {/* Saved Container */}
                <div className="">
                    <h2 className="border-b border-primaryPink font-semibold inline pb-1">{Saved.title}</h2>
                    <GridTable products={userInfo.savedProducts} />
                </div>
            </div> : null
            }
               
            {
                showHistory ? <div className="flex flex-col items-center  md:border-l md:border-primaryPink"> { /* previously Searched containrer  */}
                <div>
                    <h2 className="border-b border-primaryPink font-semibold inline pb-1">{previouslySearched.title}</h2>
                    <GridTable products={userInfo.recentlySearchedProducts} />
                </div>
                   
            </div> : null
            }
                
            </div>
    </> : <> {null} </>
}

export default DashboardMainLayout
