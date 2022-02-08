import { motion } from "framer-motion"
import { useRef, useEffect } from "react"

const DropdownMenu = ({ dropdownMenuOpen }: any) => {


  return <motion.div initial={{ height: 320, width: 300 }} animate={{ height: dropdownMenuOpen ? 320 : 0, width: dropdownMenuOpen ? 280 : 0 }} className={`shadow-md rounded-xl top-20 right-4 fixed z-50 bg-white`}>
    {dropdownMenuOpen &&
      <div className="grid grid-cols-3 gap-4 p-4">
        <a href="https://www.easycron.com/" target="_blank" className="flex justify-center flex-col items-center hover:bg-red-200 rounded-lg py-4 cursor-pointer">
          <img className="h-8 z-50" src="./easycron.svg" />
          <p className="text-xs mt-2">EasyCron</p>
        </a>
        <a href="https://www.lemlist.com/" target="_blank" className="flex justify-center flex-col items-center hover:bg-red-200 rounded-lg py-4 cursor-pointer">
          <img className="h-8 z-50" src="./lemlist.svg" />
          <p className="text-xs mt-2">Lemlist</p>
        </a>
        <a href="https://www.stannp.com/uk" target="_blank" className="flex justify-center flex-col items-center hover:bg-red-200 rounded-lg py-4 cursor-pointer">
          <img className="h-8 z-50" src="./stannp.png" />
          <p className="text-xs mt-2">Stannp</p>
        </a>
        <a href="https://ember.co/" target="_blank" className="flex justify-center flex-col items-center hover:bg-red-200 rounded-lg py-4 cursor-pointer">
          <img className="h-8 z-50" src="./e-color.svg" />
          <p className="text-xs mt-2">Ember.co</p>
        </a>
        <a href="https://app.ember.co/" target="_blank" className="flex justify-center flex-col items-center hover:bg-red-200 rounded-lg py-4 cursor-pointer">
          <img className="h-8 z-50" src="./e-color.svg" />
          <p className="text-xs mt-2">Ember App</p>
        </a>
        <a href="https://trends.google.com/trends/?geo=GB" target="_blank" className="flex justify-center flex-col items-center hover:bg-red-200 rounded-lg py-4 cursor-pointer">
          <img className="h-8 z-50" src="./e-color.svg" />
          <p className="text-xs mt-2">Google</p>
        </a>
        <a href="https://www.instagram.com/emberhub/?hl=en" target="_blank" className="flex justify-center flex-col items-center hover:bg-red-200 rounded-lg py-4 cursor-pointer">
          <img className="h-8 z-50" src="./e-color.svg" />
          <p className="text-xs mt-2">Instagram</p>
        </a>
        <a href="https://www.easycron.com/" target="_blank" className="flex justify-center flex-col items-center hover:bg-red-200 rounded-lg py-4 cursor-pointer">
          <img className="h-8 z-50" src="./e-color.svg" />
          <p className="text-xs mt-2">Youtube</p>
        </a>
        <a href="https://twitter.com/emberhub" target="_blank" className="flex justify-center flex-col items-center hover:bg-red-200 rounded-lg py-4 cursor-pointer">
          <img className="h-8 z-50" src="./e-color.svg" />
          <p className="text-xs mt-2">Twitter</p>
        </a>
      </div>}
  </motion.div>
}


export default DropdownMenu