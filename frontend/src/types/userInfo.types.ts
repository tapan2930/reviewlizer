export type productInfoType = {
    name:string,
    total_rating:string,
    total_reviews:string,
    source:string,
    link:string,
    img:string
}

export type sentimentDetailsType = {
    id:string,
    label:string,
    value:string,
}

export type highlightDetailsType = {
    positive: Array<string>,
    negative: Array<string>
}

export type productDetailsType =  {
    id:string
    productDetails: productInfoType,
    sentimentDetails: Array<sentimentDetailsType>,
    highlightDetails: Array<highlightDetailsType>
}



export type userInfoType = {
    email:string,
    id:string,
    savedProducts: Array<productDetailsType> | null,
    prevouslySearchedProduct: Array<string> | null
}


