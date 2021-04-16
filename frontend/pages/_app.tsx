import '../styles/globals.scss'
import '../styles/tailwind.css'

import ProgressBar from "@badrap/bar-of-progress"
import {useRouter, Router} from "next/router"


const progress = new ProgressBar({
  size: 4,
  color: "#131414",
  className: "bar-of-progress",
  delay: 80,
});
Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);



function MyApp({ Component, pageProps }) {
  Router.events.on("routeChangeStart", ()=>{
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
  })
  return <Component {...pageProps} />
     
}

export default MyApp
