import {useRef, useEffect} from "react"

const Popup = ({children, setPopupOpen, style, className}: any) => {
  let ref = useRef(null);

  const handleClickOutside = (event: any) => {
    // @ts-ignore
    if (ref.current && !ref.current.contains(event.target)) {
      setPopupOpen(false)
    } 
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  return <div className={className} style={{...style}} ref={ref}>{children}</div>
}

export default Popup;