import { useRef, useEffect } from "react"

const Popup = ({ children, setPopupOpen, style, className }: any) => {
  let ref = useRef(null);

  const closePopup = (event: any) => {
    // @ts-ignore
    if (ref.current && !ref.current.contains(event.target)) {
      setPopupOpen(false)
    }
  };

  useEffect(() => {
    document.addEventListener('click', closePopup, true);
    return () => {
      document.removeEventListener('click', closePopup, true);
    };
  });

  return <div className={className} style={{ ...style }} ref={ref}>{children}</div>
}

export default Popup;