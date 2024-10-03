import { useEffect, useState } from "react"

const useNetworkStatus=()=>{
    const [status,setStatus]=useState(true)

    useEffect(()=>{

        window.addEventListener('online',()=>{
            setStatus(true)
           })
        
           window.addEventListener('offline',()=>{
            setStatus(false)
           })

    },[])

  

   return status
}

export default useNetworkStatus