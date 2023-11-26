"use client"

import {useState} from "react"
import Navbar from "./navbar/page"
import Sidebar from "./sidebar/page"


const navigation = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
       setIsOpen(!isOpen)
    };

    return(
        <>
         <Sidebar isOpen = {isOpen} toggle={toggle} />
        <Navbar toggle={toggle}/>
        
        </>
    )
}

export default navigation;