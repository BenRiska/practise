import {motion} from "framer-motion"
import { useRef, useEffect } from "react"
import HomeIcon from '@material-ui/icons/Home';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import CampaignIcon from '@mui/icons-material/Campaign';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import SignalWifiStatusbarConnectedNoInternet4Icon from '@mui/icons-material/SignalWifiStatusbarConnectedNoInternet4';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import { useRouter } from "next/router";


const Sidebar = ({menuOpen, setMenuOpen, logout}: any) => {
  let ref = useRef(null);

  const { pathname, replace } = useRouter();

  const handleClickOutside = (event: any) => {
    // @ts-ignore
    if (ref.current && !ref.current.contains(event.target)) {
      setMenuOpen(false)
    } 
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  return <motion.div ref={ref} initial={{left: -288}} animate={{left: menuOpen ? 0 : -288}} className="h-screen flex flex-col w-72 top-0 fixed z-50 bg-white">
            <div className="py-4 pl-9 flex space-x-3.5 items-center pr-4 border-b-2 border-solid border-gray-100">
              {/* @ts-ignore */}
              <img  className="h-7 z-50" src={`${pathname.match(new RegExp("/", "g")).length > 1 ? "." : ""}./e-color.svg`}/>
              {/* @ts-ignore */}
              <img  className="h-4 z-50" src={`${pathname.match(new RegExp("/", "g")).length > 1 ? "." : ""}./Wordmark.svg`}/>
            </div>
            <div className="flex-1">
              <div>
                <div onClick={() => {
                  replace("/") 
                  setMenuOpen(false)
                }} className="sidebar-link flex space-x-4 items-center py-4 pl-8 pr-4">
                  <HomeIcon/>
                  <p className="text-gray-700">Home</p>
                </div>
                <div onClick={() => {
                  replace("/campaigns/leads") 
                  setMenuOpen(false)
                }} className="sidebar-link flex space-x-4 items-center py-4 pl-8 pr-4">
                  <PersonSearchIcon/>
                  <p className="text-gray-700">Leads</p>
                </div>
                <div className="sidebar-link flex space-x-4 items-center py-4 pl-8 pr-4">
                  <CampaignIcon/>
                  <p className="text-gray-700">Campaigns</p>
                </div>
                <div className="sidebar-link flex space-x-4 items-center py-4 pl-8 pr-4">
                  <QueryStatsIcon/>
                  <p className="text-gray-700">Statistics</p>
                </div>
              </div>
              <div className="border-t-2 border-solid border-gray-100">
              <div className="sidebar-link flex space-x-4 items-center py-4 pl-8 pr-4">
                  <SignalWifiStatusbarConnectedNoInternet4Icon/>
                  <p className="text-gray-700">Status</p>
                </div>
                <div onClick={() => logout()} className="sidebar-link flex space-x-4 items-center py-4 pl-8 pr-4">
                  <MeetingRoomIcon/>
                  <p className="text-gray-700">Logout</p>
                </div>
              </div>
            </div>
            <div className="pl-8 pr-4 py-4 flex space-x-4 items-center border-t-2 border-solid border-gray-100">
              <a className="text-gray-500" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">Privacy</a>
              <a className="text-gray-500" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">Terms</a>
            </div>
         </motion.div>
}
  

export default Sidebar