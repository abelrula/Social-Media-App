import { useEffect, useState } from "react";
 
const useScreenSize=()=> {
    
  const isWidthAvailable = window.innerWidth !== 0
    console.log(isWidthAvailable);
    
    const [ screenSize, setScreenSize ] = useState<{width:number,height:number}>( {
      width: window.innerWidth,
      height:window.innerHeight
    } )
    
    useEffect(() => {
     
        const handleScreenSize = () => {
            setScreenSize( {
                width: window.innerWidth,
                height:window.innerHeight
            })
    }

        window.addEventListener("resize",handleScreenSize)
      return () => {
        window.removeEventListener("resize",handleScreenSize)
      }
    } ,[isWidthAvailable])
    

    return [screenSize]
    
}
export default  useScreenSize