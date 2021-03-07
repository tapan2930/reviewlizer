import React from "react"
import {ResponsivePie} from "@nivo/pie"
import {VscDebugBreakpointLog} from "react-icons/vsc"
import {TiDocumentText} from "react-icons/ti"

type sentimentData = {
    id:string,
    value:number,
    label:string
}

type propType = {
    sentimentDetails:Array<sentimentData>
}


const SentimentAnalysisContainer:React.FC<propType> = ({sentimentDetails}):React.ReactElement =>{
    return(
        <div className="rounded-lg my-6 overflow-hidden shadow-md border-2 border-gray-200 dark:border-gray-700 ">
            <div className="grid grid-cols-1 md:grid-cols-2 md:flex-row bg-gray-100 dark:bg-d-bg-container  ">

                <div style={{height:"464px"}}  className=" flex-none p-4 md:p-10"> {/* PieChart */}
                    <ResponsivePie
                    data = {sentimentDetails}
                    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                    innerRadius={0.5}
                    padAngle={0.7}
                    cornerRadius={3}
                    colors={{ scheme: 'nivo' }}
                    borderWidth={1}
                    borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
                    radialLabelsSkipAngle={10}
                    radialLabelsTextColor="#333333"
                    radialLabelsLinkColor={{ from: 'color' }}
                    sliceLabelsSkipAngle={10}
                    sliceLabelsTextColor="#333333"

                    defs={[
                        {
                            id: 'dots',
                            type: 'patternDots',
                            background: 'inherit',
                            color: 'rgba(255, 255, 255, 0.3)',
                            size: 4,
                            padding: 1,
                            stagger: true
                        },
                        {
                            id: 'lines',
                            type: 'patternLines',
                            background: 'inherit',
                            color: 'rgba(255, 255, 255, 0.3)',
                            rotation: -45,
                            lineWidth: 6,
                            spacing: 10
                        }
                    ]}
                    fill={[
                        {
                            match: {
                                id: 'positive'
                            },
                            id: 'dots'
                        },
                        {
                            match: {
                                id: 'negative'
                            },
                            id: 'dots'
                        },
                        {
                            match: {
                                id: 'neutral'
                            },
                            id: 'dots'
                        }
                    ]}
                    legends={[
                        {
                            anchor: 'bottom',
                            direction: 'row',
                            justify: false,
                            translateX: 0,
                            translateY: 40,
                            itemsSpacing: 0,
                            itemWidth: 80,
                            itemHeight: 18,
                            itemTextColor: '#999',
                            itemDirection: 'left-to-right',
                            itemOpacity: 1,
                            symbolSize: 18,
                            symbolShape: 'circle',
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemTextColor: '#000'
                                    }
                                }
                            ]
                        }
                    ]}
                    />
                </div>

                <div className="bg-gray-200  dark:bg-gray-900  p-4 md:p-10">
                    <div className="text-center mb-6"> <h1 className="text-lg font-semibold border-b-2 border-primaryPink inline-flex items-center p-2  "> <span className="text-2xl bg-secondaryPink rounded-lg p-1 text-primaryPink mr-2"><TiDocumentText /></span> Sentiment Analysis: </h1> </div>
                        <div className="my-4">
                            <ul className=" font-semibold">
                               <div className="flex my-3"> <span className="pt-1 text-primaryPink mr-1"><VscDebugBreakpointLog/></span> <li> Positve Generally consist of the reviews
                            where users were happy with the product. </li></div> 

                                <div className="flex my-3"><span  className="pt-1 text-primaryPink mr-1"><VscDebugBreakpointLog/></span> <li>Neutral consist of the reviews, where users were neither happy or complaining about the
                            product. In some cases, if reviews are not
                            proporly classified then thay are
                            categoriezed as neutral</li> </div>


                                <div className="flex my-3"><span  className="pt-1 text-primaryPink mr-1"><VscDebugBreakpointLog/></span>  <li>Negative consist of reviews, where users are
                            complaining about product and had issues with
                            it. Simply they were not happy with the
                            product.</li> </div>
                                
                               
                            </ul>
                             

                            
                      </div>
                </div>
            </div>
        </div>
    )
}

export default SentimentAnalysisContainer