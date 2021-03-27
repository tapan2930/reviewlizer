import {destroyCookie} from 'nookies'

const clearUserCookies = ()=>{
    destroyCookie(null, 'userToken')
    localStorage.removeItem("user_id")
}

export default clearUserCookies