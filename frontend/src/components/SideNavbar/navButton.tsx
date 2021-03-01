import React,{FunctionComponent} from 'react';
import Link from "next/link"

interface props {
    name:string,
    link:string
}


const NavButton:FunctionComponent<props> = ({children,name,link})=>{
    return (
        <div className=" flex flex-col justify-center items-center my-3 ">
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