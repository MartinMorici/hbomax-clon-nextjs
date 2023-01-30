import { auth } from "../firebase"
import { onAuthStateChanged } from "firebase/auth"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"


export const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const router = useRouter()
    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
      onAuthStateChanged(auth,(user) => {
        if (user) {
            console.log(user);
            setCurrentUser(user)
        } else{
            setCurrentUser(null)
            router.push('/login')
        }
      })
    }, [auth])
    

    return (
      <AppContext.Provider value={{currentUser}}>{children}</AppContext.Provider>
    )
  }
  
  export default AppProvider;
