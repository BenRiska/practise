import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Popup from '../Popup';
import { useState } from "react"


const LeadsMenu = ({ filter, adjustFilter }: any) => {

  const [ageMenuOpen, setAgeMenuOpen] = useState(false)
  const [locationMenuOpen, setLocationMenuOpen] = useState(false)
  const [classMenuOpen, setClassMenuOpen] = useState(false)
  const [requiredMenuOpen, setRequiredMenuOpen] = useState(false)
  const [locationInput, setLocationInput] = useState("")
  const [classInput, setClassInput] = useState("")

  const handleLocationInput = (e: any) => {
    if (e.key === "Enter") {
      adjustFilter("locations", [...filter.locations, locationInput]);
      setLocationInput("");
    }
  }

  const handleClassInput = (e: any) => {
    if (e.key === "Enter") {
      if (classInput.length === 5) {
        adjustFilter("classifications", [...filter.classifications, classInput]);
        setClassInput("");
      } else {
        alert("Invalid Code");
      }
    }
  }


  return <div style={{ marginTop: 64 }} className="shadow fixed top-0 left-0 right-0 w-screen z-20 bg-white">
    <div style={{ maxWidth: 1085 }} className="mx-auto flex items-center space-x-2">
      <div onClick={() => setAgeMenuOpen(true)} className="p-4 relative flex space-x-1.5 items-center cursor-pointer">
        <p>Age</p>
        <ArrowDropDownIcon />
        {ageMenuOpen &&
          <Popup setPopupOpen={setAgeMenuOpen} style={{ bottom: -188, width: 200 }} className={'absolute space-y-4 p-4 bottom-0 flex flex-col left-0 right-0 rounded-md shadow z-30 bg-white'}>
            <h2>Min</h2>
            <select onChange={e => adjustFilter("age", { min: e.currentTarget.value, max: filter.age.max })}>
              {/* @ts-ignore */}
              {Array.apply(null, { length: 100 }).map((_, i) => <option value={i + 1}>{i + 1}</option>)}
            </select>
            <div style={{ height: 1 }} className='w-full bg-gray-200' />
            <h2>Max</h2>
            <select onChange={e => adjustFilter("age", { min: filter.age.min, max: e.currentTarget.value })}>
              {/* @ts-ignore */}
              {Array.apply(null, { length: 100 }).map((_, i) => <option value={i + 1}>{i + 1}</option>)}
            </select>
          </Popup>
        }
      </div>
      <div onClick={() => setLocationMenuOpen(true)} className="p-4 relative flex space-x-1.5 items-center cursor-pointer">
        <p>Location</p>
        <ArrowDropDownIcon />
        {locationMenuOpen &&
          <Popup setPopupOpen={setLocationMenuOpen} style={{ bottom: -50, width: 200 }} className={'absolute bottom-0 flex h-12 flex-col left-0 right-0 rounded-md shadow z-30 bg-white'}>
            <input className='shadow rounded text-2xl outline-red-400 h-12' value={locationInput} onChange={e => setLocationInput(e.currentTarget.value)} onKeyPress={e => handleLocationInput(e)} type="text" />
          </Popup>
        }
      </div>
      <div onClick={() => setClassMenuOpen(true)} className="p-4 relative flex space-x-1.5 items-cente cursor-pointer">
        <p>Classification</p>
        <ArrowDropDownIcon />
        {classMenuOpen &&
          <Popup setPopupOpen={setClassMenuOpen} style={{ bottom: -50, width: 200 }} className={'absolute h-12 bottom-0 flex flex-col left-0 right-0 rounded-md shadow z-30 bg-white'}>
            <input className='shadow rounded text-2xl outline-red-400 h-12' value={classInput} onChange={e => setClassInput(e.currentTarget.value)} onKeyPress={e => handleClassInput(e)} type="text" />
          </Popup>
        }
      </div>
      <div onClick={() => setRequiredMenuOpen(true)} className="p-4 relative flex space-x-1.5 items-center cursor-pointer">
        <p>Required</p>
        <ArrowDropDownIcon />
        {requiredMenuOpen &&
          <Popup setPopupOpen={setRequiredMenuOpen} style={{ bottom: -230, width: 200 }} className={'absolute space-y-4 p-4 bottom-0 flex flex-col left-0 right-0 rounded-md shadow z-30 bg-white'}>
            <h2>Address</h2>
            <input onChange={() => adjustFilter("address", !filter.address)} type="checkbox" checked={filter.address} />
            <h2>Email</h2>
            <input onChange={() => adjustFilter("email", !filter.email)} type="checkbox" checked={filter.email} />
            <h2>Linkedin</h2>
            <input onChange={() => adjustFilter("linkedin", !filter.linkedin)} type="checkbox" checked={filter.linkedin} />
          </Popup>
        }
      </div>
    </div>
  </div>
}

export default LeadsMenu