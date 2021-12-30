import {motion} from "framer-motion"
import { useRef, useEffect } from "react"

const DropdownMenu = ({dropdownMenuOpen}: any) => {


  return <motion.div initial={{height: 400, width: 280}} animate={{height: dropdownMenuOpen ? 400 : 0, width: dropdownMenuOpen ? 280 : 0}}  className={`shadow-md rounded-xl top-20 right-4 fixed z-50 bg-white`}>
            { dropdownMenuOpen && 
            <>
            <img  className="h-12 z-50" src="./e-color.svg"/>
            <h1 style={{fontSize: 40}}>HIIII</h1>
            </>}
         </motion.div>
}
  

export default DropdownMenu