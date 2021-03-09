import React,{FunctionComponent} from 'react';
import Link from "next/link"
import {useRouter} from "next/router"


interface props {
    name:string,
    link:string
}



const NavButton:FunctionComponent<props> = ({children,name,link})=>{
    const router = useRouter()
    // const ActiveLinkStyler = (link:string)=>{
    //     const route = Router.pathname
    //     if(route ===link ){
    //         return ""
    //     }
    // }
    return (
        <div className={` ${router.pathname === link ? "bg-primaryPink text-white" : ""} flex flex-col justify-center items-center py-3 `}>
           <Link href={link}><a>
                <div className="text-2xl flex justify-center mb-1">
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