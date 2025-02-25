import { useEffect, useState } from "react"


  const  useDebounce =<T>(delay:number,input:T) =>{
    
      const [value,setValue]=useState<T>(input)
     console.log(value);
     console.log(input);
     
    useEffect(() => {
       
      const handler = setTimeout(() => {
            setValue(input)
       }, delay);
      
      return () => clearTimeout(handler)
      
      }, [ input,delay ] )
      
    
return value
}

export default useDebounce 