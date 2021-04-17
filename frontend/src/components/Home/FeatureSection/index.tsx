import React from 'react'
import {GrGraphQl} from "react-icons/gr"
import {ImParagraphRight} from "react-icons/im"
import {WiMoonAltThirdQuarter} from "react-icons/wi"
import {AiTwotoneStar, AiFillPrinter,AiOutlineHistory} from "react-icons/ai"




const featureSection = {
    "title": "Why you’ll love using Reviewlizer",
    "subTitle": "Brief details about the features to help you know your customer better !",
    featureCardDetail: [
        {
            icon: <GrGraphQl />,
            title: "Sentiment Analysis:",
            text: "Find the sentiment analysis of the product. View the anaylsis in easy to understand pie chart."
        },
        {
            icon: <ImParagraphRight />,
            title: "Factual Details:",
            text: "Find what user like and don't about our product from the reviews."
        },
        {
            icon: <AiTwotoneStar />,
            title: "Saving Product:",
            text: "Save the analyised product for future reference. When you are logged In, you can save product."
        },
        {
            icon: <AiFillPrinter /> ,
            title: "Generate PDF:",
            text: "Generate PDF for the analyised product. It's one click away."
        },
        {
            icon: <AiOutlineHistory />,
            title: "History Of Search:",
            text: "When you search the product, we save that link, so you know what you were doing before you left."
        },
        {
            icon: <WiMoonAltThirdQuarter />,
            title: "Dark Mode for Ease:",
            text: "We care for your eyes also. So added dark mode, so you and your eyes stay at comfort."
        }
    ]
}

const HomeFeatureSection :React.FC = ():React.ReactElement => {
    return (
        <div className="bg-white py-12">
              {/* section 1  Title and Sub title*/}
            <div>
                <h1 className="text-center text-xl font-semibold text-gray-700 sm:text-2xl md:text-3xl md:mb-6 md:mt-20">{featureSection.title}</h1>
                <h2 className="text-center text-base font-normal text-gray-500 mt-2 md:text-xl">{featureSection.subTitle}</h2>
            </div>

            {/* section 2 Feature cards */}
            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 mx-6 md:mx-0 ">
                {
                  featureSection.featureCardDetail.map((card,id)=>{
                      return (
                          <FeatureCard featureCardDetail = {card} />
                      )
                  })  
                }
            </div>
        </div>
    )
}

const FeatureCard = ({featureCardDetail}) => {
    return (
        <div className="card flex h-40 p-6 md:max-w-sm md:odd:ml-auto">
            <div className="text-4xl text-primaryPink">{featureCardDetail.icon}</div>
            <div className="ml-4">
                <h1 className="hUnderline text-lg font-medium mb-6">{featureCardDetail.title}</h1>
                <div>{featureCardDetail.text}</div>
            </div>
        </div>
    )  
}

export default HomeFeatureSection