import React,{FunctionComponent} from 'react';
import Link from "next/link"
import {useRouter} from "next/router"


interface props {
    name:string,
    link:string,
    align?:string
}



const NavButton:FunctionComponent<props> = ({children,name,link, align= "vertical"})=>{
    const router = useRouter()
    // const ActiveLinkStyler = (link:string)=>{
    //     const route = Router.pathname
    //     if(route ===link ){
    //         return ""
    //     }
    // }
    const navButtonStyle = ()=>{
        switch(align) {
            case "horizontal": return " ";
            case "vertical" : return "py-3";
        }
    }
    

    return (
        <div className={` ${router.pathname === link ? " border-b-4 border-primaryPink mb:border-b-0 md:bg-primaryPink md:text-white" : ""} flex flex-col justify-center items-center  ${navButtonStyle()} `}>
           <Link href={link}><a>
                <div className="text-2xl flex justify-center mb-0 md:mb-1">
                    {children}
                </div>
                <div className="text-xs font-semibold">
                    {name}
                </div>
                </a>
            </Link>
        </div>
    )
}

export default NavButton