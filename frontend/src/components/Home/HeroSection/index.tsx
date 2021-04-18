import React from 'react'
import MyButton from '../../Button'

const heroSectionData = {
    "heroTitle": "Find meaning in customer reviews",
    "heroSecondaryTitle": "Reviewlizer helps you to find what your customer think’s about your product.Get detailed insight about your product from the user reviews"
}


const HomeHeroSection :React.FC = ():React.ReactElement => {
    return (
        <div className="pb-0 md:pb-16">
            {/* section 1  Title and Sub title*/}
            <div className="mt-12">
                <h1 className="text-center text-2xl font-semibold text-gray-700 sm:text-3xl md:text-5xl md:mb-6 md:mt-20">{heroSectionData.heroTitle}</h1>
                <h2 className="text-center text-base font-normal text-gray-500 mt-8 md:text-xl">{heroSectionData.heroSecondaryTitle}</h2>
            </div>

            {/* section 2 Button */}
            <div className="flex justify-center my-10">
            <MyButton>Create Account and Get Started</MyButton>
            </div>

            {/* Section 3 Hero Img */}
            <div className="relative hidden sm:block">
                <img className="absolute -right-16 -bottom-16 z-0 " src="/assets/images/hero-clip-1.png"/>
                <div className=" h-hero z-10 relative  bg-red-100 overflow-y-auto border rounded-lg shadow-2xl hero-scroll mb-16">
                    <img src="/assets/images/hero.png" alt="hero img" />
                </div>
               
            </div>

        </div>
    )
}

export default HomeHeroSection