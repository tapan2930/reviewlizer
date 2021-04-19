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
    <div className="grid grid-cols-1  md:grid-cols-2 gap-10 md:gap-0  py-8 px-3">
            {
                showSaved ?  <div> {/* Saved Container */}
                <div className="md:ml-auto w-max md:mr-4">
                    <h2 className="border-b-4 border-primaryPink font-bold inline pb-1">{Saved.title}</h2>
                    <div className="mt-10"><GridTable products={userInfo.savedProducts} /></div>
                </div>
            </div> : null
            }
               
            {
                showHistory ? <div className=" md:border-l md:border-primaryPink "> { /* previously Searched containrer  */}
                <div className="md:ml-4">
                    <h2 className="border-b-4 border-primaryPink font-bold inline pb-1  ">{previouslySearched.title}</h2>
                    <div className="mt-10">
                        {
                            userInfo.recentlySearchedProducts.map((link,id)=>{
                                return(
                                    <div id={`${id}`} >
                                        <a href={link}><p className="cursor-pointer border-dotted border-b border-primaryPink hover:border-solid my-1">{link.slice(0,40)}{link.length > 40 ? "...": ""}</p></a>
                                    </div>
                                )
                            })
                        }
                    </div>
                    
                </div>
                   
            </div> : null
            }
                
            </div>
    </> : <> {null} </>
}

export default DashboardMainLayout
