import create from "zustand"
import { addToProductHistory } from "../services/updateProductHistory"
import { addToSavedProduct, deleteFromSavedProduct } from "../services/updateSavedProducts"
import {prevouslySearchedProductType, productDetailsType, userInfoType} from "../types/userInfo.types"
import { getUser } from "../utils/auth/helper"
import getUserTokenNId from "../utils/auth/helper/userTokenNId"



// ******************Dark Mode****************** //
export type useDarkModeType =  {
    theme:boolean,
    toggle: () => void
}

export const useDarkMode = create<useDarkModeType>(set  => ({
    // theme : localStorage.getItem("userTheme") || "light",
    theme: false,
    toggle: () => set(state => ({ theme: !state.theme}))
}) )


// *******************Navbar Toggle***************** //
export type useNavbarToggleType =  {
    navbar:boolean,
    toggle: () => void
}

export const useNavbarToggle = create<useNavbarToggleType>( (set) =>({
    navbar: false,
    toggle: () => set((state) => ({
        navbar: !state.navbar
    }))
}))


//  *****************Search Values******************* //
export type useSearchValueType =  {
    searchValue:string,
    setSearchValue: (value) => void
}

export const useSearchValue = create<useSearchValueType>( (set) =>({
    searchValue: "",
    setSearchValue: (value) => set((state) => ({
        searchValue: value
    }))
}))


//  *******************Skeleton******************** //
export type useSkeletonType =  {
    loading:boolean,
    toggle: (value:boolean) => void
}

export const useSkeleton = create<useSkeletonType>(set  => ({
    loading: false,
    toggle: (value) => set(state => ({ loading: value}))
}) )


// ********************Data************************** //
export type useOnSeachDataType = {
    data:any,
    setData: (data:any) => void,
    resetData: () => void
}

export const useOnSeachData = create<useOnSeachDataType>(set =>({
    data:null,
    setData: (data)=> set(state => ({data})) ,
    resetData:  ()=> set(state => ({data: null}))
}))

// ********************Show Analysis**************** //
export type showAnalysisType =  {
    show:boolean,
    toggle: (value:boolean) => void
}

export const showAnalysis = create<showAnalysisType>(set  => ({
    show: false,
    toggle: (value) => set(state => ({ show: value}))
}) )


// ****************** User Info ****************** //
export type userInfoTypeStore = {
    userData: userInfoType | null,
    setUser: (userData) => void
    authUser: (token, userId) => Promise<any>
    addSaved: (token,userId, newProduct) => Promise<Array<productDetailsType>>,
    deleteSaved: (productId) => Promise<Array<productDetailsType>>,
    addHistory: (productSearched) => Promise<Array<prevouslySearchedProductType>>
}

export const userInfo = create<userInfoTypeStore>((set,get) => ({
    userData: null,
    setUser: (userData) =>{
        set({userData})
    },
    authUser: async (token, userId) => {
        const user =  await getUser(userId, token)
        return user
    },
    addSaved: async (token,userId, newProduct) =>{
        const res = await addToSavedProduct(token,userId, newProduct)
        set({ userData: await {...res.data}})
        return res.data.savedProduct
    },
    deleteSaved: async (productId) => {
        const [token,userId] = getUserTokenNId()
        const res = await deleteFromSavedProduct(token,userId, productId)
        if(res.status === 200){
            set({userData : await {...res.data}})
            console.log(get().userData, "zustand", res.data.savedProducts)
            return res.data.savedProducts
        }
        return null
    },
    addHistory: async (productSearched) => {
        const [token,userId] = getUserTokenNId()
        const res = await addToProductHistory(token,userId,productSearched)
        if(res.status === 200){
            set({userData : await {...res.data}})
            return res.data.prevouslySearchedProduct
        }
        return null
    }
}))