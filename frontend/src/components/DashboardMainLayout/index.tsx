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

const DashboardMainLayout = () => {
    
    return (
        <div className="h-full">
            <div className="flex container items-center justify-center my-16">
                <div className="w-full flex flex-col">
                   <SearchBar onSearch = {null} />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 pt-8">
                <div  className="flex flex-col items-center md:border-r md:border-primaryPink"> {/* Saved Container */}
                    <div className="">
                        <h2 className="border-b border-primaryPink font-semibold inline pb-1">{Saved.title}</h2>
                        <GridTable products={Saved.products} />
                    </div>
                </div>

                <div className="flex flex-col items-center"> { /* previously Searched containrer  */}
                    <div>
                        <h2 className="border-b border-primaryPink font-semibold inline pb-1">{previouslySearched.title}</h2>
                        <GridTable products={previouslySearched.products} />
                    </div>
                       
                </div>
            </div>
        </div>
    )
}

export default DashboardMainLayout
