import React from 'react';
import Link from "next/link"




const NavButton = (props: any)=>{
    return (
        <div className=" flex flex-col justify-center items-center my-3 ">
           <Link href="/"><a>
                <div className="text-2xl flex justify-center mb-1">
                    {props.children}
                </div>
                <div className="text-xs font-semibold">
                    {props.name}
                </div>
                </a>
            </Link>
        </div>
    )
}

export default NavButton