import create from "zustand"


export type useDarkModeType =  {
    theme:boolean,
    toggle: () => void
}


export const useDarkMode = create<useDarkModeType>(set  => ({
    // theme : localStorage.getItem("userTheme") || "light",
    theme: false,
    toggle: () => set(state => ({ theme: !state.theme}))
}) )


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

// export type useSearchValueType =  {
//     seachValue:string,
//     setSearchValue: (value:string) => void
// }


// export const useSearchValue = create<useSearchValueType>( (set) =>({
//     searchValue: "",
//     setSearchValue: (value) => set((state) =>({
//         searchValue: value
//     }))
// }))


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