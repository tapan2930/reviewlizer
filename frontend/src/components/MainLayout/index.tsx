import React, {useState} from 'react';
import {AiOutlineSearch} from 'react-icons/ai'
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

const MainLayout = () => {
    const [searchValue, setSearchValue] = useState("")

    return (
        <div className="grid grid-rows-3 md:grid-rows-2 content-end h-screen ">
            <div className="flex items-center justify-center">
                <div className="w-full sm:w-8/12 flex">
                    <input className="py-4 px-4 w-full  inline-block bg-secondaryPink" type="text" value={searchValue} placeholder="Search..." onChange={(e)=> setSearchValue(e.target.value)} />
                    <button className="bg-primaryPink text-gray-50 py-4 px-6"><span className=" text-lg inline sm:hidden"><AiOutlineSearch/></span><span className="hidden sm:inline "> Search </span> </button>
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

export default MainLayout