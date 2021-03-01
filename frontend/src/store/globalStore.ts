import create from "zustand"



export const useDarkMode = create(set  => ({
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



