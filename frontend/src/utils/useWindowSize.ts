
const useWindowSize = () =>{
    let device = null;
    let width = window.innerWidth;
    const minDisplay = 768;
    if (width < minDisplay){
        device = "sm"
    }else{
        device = "nsm"
    }

    return device
}

export default useWindowSize