export type productInfoType = {
    id:string,
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
    productDetails: productInfoType,
    sentimentDetails: Array<sentimentDetailsType>,
    highlightDetails: Array<highlightDetailsType>
}

export type prevouslySearchedProductType = {
    id:string,
    link: string
}

export type userInfoType = {
    name:string,
    email:string,
    id:string,
    savedProduct: Array<productDetailsType> | null,
    prevouslySearchedProduct: Array<prevouslySearchedProductType> | null
}


