import {parseCookies} from "nookies"

const getUserTokenNId = ()=>{
    const cookies = parseCookies()
    const userId = localStorage.getItem("user_id")
    // const token = nookies.
    return [cookies.userToken,userId]
}

export default getUserTokenNId