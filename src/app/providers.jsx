"use client"

import { createContext, useState } from "react"

const SidebarContext = createContext()

const SidebarProvider = ({children}) => {
    const [val, setVal] = useState(0)

  return (
    <SidebarContext.Provider value={{val,setVal}}>
        {children}

    </SidebarContext.Provider>
  )
}

export {SidebarProvider, SidebarContext}
