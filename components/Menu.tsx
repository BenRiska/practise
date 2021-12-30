import { useRouter } from "next/router";
import MenuIcon from '@material-ui/icons/Menu';
import AppsIcon from '@material-ui/icons/Apps';
import { IconButton } from "@material-ui/core";
import getPageName from "../utils/getPageName"


const Menu = ({user, setMenuOpen, setDropdownMenuOpen}: any) => {

  const { pathname, replace } = useRouter();
  
  return  <header
              className={`flex justify-between items-center py-1 px-4 bg-red-400 z-40 shadow-lg fixed top-0 left-0 right-0`}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <IconButton onClick={() => setMenuOpen((prev: boolean) => !prev)}>
                  <MenuIcon />
                </IconButton>
                 {/* @ts-ignore */}
                <img className="h-7 ml-4" src={`${pathname.match(new RegExp("/", "g")).length > 1 ? "." : ""}./black.svg`} />
                 {/* @ts-ignore */}
                <img onClick={() => replace("/")} className="h-4 ml-2 cursor-pointer" src={`${pathname.match(new RegExp("/", "g")).length > 1 ? "." : ""}./Wordmark.svg`} />
                <div style={{width: 1}} className="h-8 ml-4 opacity-50 bg-black"/>
                <p className="ml-4">{getPageName(pathname)}</p>
              </div>
              <div className="flex items-center space-x-1 justify-center">
                <IconButton onClick={() => setDropdownMenuOpen((prev: boolean) => !prev)}>
                  <AppsIcon />
                </IconButton>
                <IconButton >
                  <img className="h-8 rounded-full" src={user.picture}/>
                </IconButton>
              </div>
          </header>
}

export default Menu;