import '../styles/globals.scss'
import '../styles/tailwind.css'



function MyApp({ Component, pageProps }) {
 
  return <div className="bg-gray-50 h-screen"> <Component {...pageProps} /> </div>
     
}

export default MyApp
