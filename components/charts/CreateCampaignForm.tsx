import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState } from "react"

const CreateCampaignForm = ({ createCampaign, campaignState, setCampaignState }: any) => {
  const [name, setName] = useState("")
  const [sic, setSic] = useState("")
  const [locality, setLocality] = useState("")
  return <div className='my-12'>
    <div className="border-red-200 hover:border-red-400 mt-8 border-2 rounded p-8 flex flex-col items-center py-20">
      <h2 className="flex text-3xl">
        <p className="border-red-400 flex align-center rounded-full border-2 h-8 w-8 mr-4">
          <span className="w-full flex items-center justify-center text-base">1</span>
        </p>
        What is the category of your campaign?
      </h2>
      <div className="mt-8 flex space-x-8">
        <div onClick={() => setCampaignState({ ...campaignState, type: "LEMLIST" })} className={`flex items-center justify-center text-xl ${campaignState.type === "LEMLIST" ? "bg-red-400" : "bg-red-200"}  hover:bg-red-400 rounded-lg w-40 h-12 flex justify-center cursor-pointer`}>Lemlist</div>
        <div onClick={() => setCampaignState({ ...campaignState, type: "MAIL" })} className={`flex items-center justify-center text-xl ${campaignState.type === "MAIL" ? "bg-red-400" : "bg-red-200"}  hover:bg-red-400 rounded-lg w-40 h-12 flex justify-center cursor-pointer`}>Mail</div>
      </div>
    </div>
    <div className="border-red-200 hover:border-red-400 mt-8 border-2 rounded p-8 flex flex-col items-center py-20">
      <h2 className="flex text-3xl">
        <p className="border-red-400 flex align-center rounded-full border-2 h-8 w-8 mr-4">
          <span className="w-full flex items-center justify-center text-base">2</span>
        </p>
        Lead Criteria
      </h2>
      <div className='flex justify-evenly mt-4 space-x-4'>
        <div className='flex-1 space-y-4'>
          <input className='outline-red-400' placeholder='Director Age (min)' onChange={e => setCampaignState({ ...campaignState, leadFilters: { ...campaignState.leadFilters, ageRange: { ...campaignState.leadFilters.ageRange, min: e.currentTarget.value } } })} value={campaignState.leadFilters.ageRange.min} type="number" />
          <input className='outline-red-400' placeholder='Director Age (max)' onChange={e => setCampaignState({ ...campaignState, leadFilters: { ...campaignState.leadFilters, ageRange: { ...campaignState.leadFilters.ageRange, max: e.currentTarget.value } } })} value={campaignState.leadFilters.ageRange.max} type="number" />
        </div>
        <div className='flex-1 space-y-4'>
          <input className='outline-red-400' placeholder='Company Age (min)' onChange={e => setCampaignState({ ...campaignState, leadFilters: { ...campaignState.leadFilters, companyAge: { ...campaignState.leadFilters.companyAge, min: e.currentTarget.value } } })} value={campaignState.leadFilters.companyAge.min} type="number" />
          <input className='outline-red-400' placeholder='Company Age (max)' onChange={e => setCampaignState({ ...campaignState, leadFilters: { ...campaignState.leadFilters, companyAge: { ...campaignState.leadFilters.companyAge, max: e.currentTarget.value } } })} value={campaignState.leadFilters.companyAge.max} type="number" />
        </div>
        <div className='flex-1'>
          <div className='flex items-center space-x-2'>
            <h2>Address</h2>
            <input className='outline-red-400' onChange={() => setCampaignState({ ...campaignState, leadFilters: { ...campaignState.leadFilters, required: { ...campaignState.leadFilters.required, address: !campaignState.leadFilters.required.address } } })} type="checkbox" checked={campaignState.leadFilters.required.address} />
          </div>
          <div className='flex items-center space-x-2'>
            <h2>Email</h2>
            <input className='outline-red-400' onChange={() => setCampaignState({ ...campaignState, leadFilters: { ...campaignState.leadFilters, required: { ...campaignState.leadFilters.required, email: !campaignState.leadFilters.required.email } } })} type="checkbox" checked={campaignState.leadFilters.required.email} />
          </div>
          <div className='flex items-center space-x-2'>
            <h2>Linkedin</h2>
            <input className='outline-red-400' onChange={() => setCampaignState({ ...campaignState, leadFilters: { ...campaignState.leadFilters, required: { ...campaignState.leadFilters.required, linkedin: !campaignState.leadFilters.required.linkedin } } })} type="checkbox" checked={campaignState.leadFilters.required.linkedin} />
          </div>
        </div>
        <div className='flex-1'>
          {campaignState.type === "MAIL" && <input className='outline-red-400' placeholder='Total sendees' onChange={e => setCampaignState({ ...campaignState, leadFilters: { ...campaignState.leadFilters, take: e.currentTarget.value } })} value={campaignState.leadFilters.take} type="number" />}
          {campaignState.type === "LEMLIST" && <div className='space-y-4'>
            <input className='w-full outline-red-400' placeholder='Lemlist Campaign Name' type="text" value={campaignState.lemlistName} onChange={e => setCampaignState({ ...campaignState, lemlistName: e.currentTarget.value })} />
            <input className='w-full outline-red-400' placeholder='Lemlist Campaign Id' type="text" value={campaignState.lemlistId} onChange={e => setCampaignState({ ...campaignState, lemlistId: e.currentTarget.value })} />
          </div>}
        </div>
      </div>
    </div>
    {campaignState.type === "MAIL" && <div className="border-red-200 hover:border-red-400 mt-8 border-2 rounded p-8 flex flex-col items-center py-20">
      <h2 className="flex text-3xl">
        <p className="border-red-400 flex align-center rounded-full border-2 h-8 w-8 mr-4">
          <span className="w-full flex items-center justify-center text-base">3</span>
        </p>
        Which template should be used?
      </h2>
      <div className='flex mt-4 overflow-x-scroll overflow-y-hidden max-w-full'>
        <div className='flex'>
          <div className='w-32 h-48 bg-red-200 flex justify-center items-center cursor-pointer'>
            <img onClick={() => setCampaignState({ ...campaignState, template: 1 })} className={`w-32 h-48 ${campaignState.template === 1 && "border-2 border-red-400"}`} src="../letter-1.png" />
          </div>
          <div className='w-32 ml-4 h-48 bg-red-200 flex justify-center items-center cursor-pointer'>
            <img onClick={() => setCampaignState({ ...campaignState, template: 2 })} className={`w-32 h-48 ${campaignState.template === 2 && "border-2 border-red-400"}`} src="../letter-2.png" />
          </div>
          <div className='w-32 ml-4 h-48 bg-red-200 flex justify-center items-center cursor-pointer'>
            <img onClick={() => setCampaignState({ ...campaignState, template: 3 })} className={`w-32 h-48 ${campaignState.template === 3 && "border-2 border-red-400"}`} src="../letter-3.png" />
          </div>
          <div className='w-32 ml-4 h-48 bg-red-200 flex justify-center items-center cursor-pointer'>
            <img onClick={() => setCampaignState({ ...campaignState, template: 4 })} className={`w-32 h-48 ${campaignState.template === 4 && "border-2 border-red-400"}`} src="../letter-4.png" />
          </div>
          <div className='w-32 ml-4 h-48 bg-red-200 flex justify-center items-center cursor-pointer'>
            <img onClick={() => setCampaignState({ ...campaignState, template: 5 })} className={`w-32 h-48 ${campaignState.template === 5 && "border-2 border-red-400"}`} src="../letter-5.png" />
          </div>
          <div className='w-32 ml-4 h-48 bg-red-200 flex justify-center items-center cursor-pointer'>
            <img onClick={() => setCampaignState({ ...campaignState, template: 6 })} className={`w-32 h-48 ${campaignState.template === 6 && "border-2 border-red-400"}`} src="../letter-6.png" />
          </div>
          <div className='w-32 ml-4 h-48 bg-red-200 flex justify-center items-center cursor-pointer'>
            <img onClick={() => setCampaignState({ ...campaignState, template: 7 })} className={`w-32 h-48 ${campaignState.template === 7 && "border-2 border-red-400"}`} src="../letter-7.png" />
          </div>
          <div className='w-32 ml-4 h-48 bg-red-200 flex justify-center items-center cursor-pointer'>
            <img onClick={() => setCampaignState({ ...campaignState, template: 8 })} className={`w-32 h-48 ${campaignState.template === 8 && "border-2 border-red-400"}`} src="../letter-8.png" />
          </div>
          <div className='w-32 ml-4 h-48 bg-red-200 flex justify-center items-center cursor-pointer'>
            <img onClick={() => setCampaignState({ ...campaignState, template: 9 })} className={`w-32 h-48 ${campaignState.template === 9 && "border-2 border-red-400"}`} src="../letter-9.png" />
          </div>
          <div className='w-32 ml-4 h-48 bg-red-200 flex justify-center items-center cursor-pointer'>
            <img onClick={() => setCampaignState({ ...campaignState, template: 10 })} className={`w-32 h-48 ${campaignState.template === 10 && "border-2 border-red-400"}`} src="../letter-10.png" />
          </div>
        </div>
      </div>
    </div>}
    <div className="border-red-200 hover:border-red-400 mt-8 border-2 rounded p-8 flex flex-col items-center py-20">
      <h2 className="flex text-3xl">
        <p className="border-red-400 flex align-center rounded-full border-2 h-8 w-8 mr-4">
          <span className="w-full flex items-center justify-center text-base">{campaignState.type === "LEMLIST" ? 3 : 4}</span>
        </p>
        Select industries (if any)
      </h2>
      <div className="mt-4 flex w-full">
        <div className='flex'>
          <input value={sic} onChange={e => setSic(e.currentTarget.value)} type="text" className="bg-gray-100 w-40 h-12 text-xl outline-red-400 cursor-pointer focus:cursor-default" />
          <div onClick={() => setCampaignState({ ...campaignState, leadFilters: { ...campaignState.leadFilters, classifications: [...campaignState.leadFilters.classifications, sic] } })} className='ml-4 flex justify-center items-center rounded-lg h-12 w-16 bg-red-200 hover:bg-red-400'>
            <ArrowForwardIcon />
          </div>
        </div>
        {campaignState.leadFilters.classifications.map((sic: any) =>
          <div onClick={() => setCampaignState({ ...campaignState, leadFilters: { ...campaignState.leadFilters, classifications: campaignState.leadFilters.classifications.filter((i: any) => i !== sic) } })} className='ml-4 flex justify-center items-center rounded-lg h-12 w-16 bg-red-200 hover:bg-red-400'>
            {sic}
          </div>)}
      </div>
    </div>
    <div className="border-red-200 hover:border-red-400 mt-8 border-2 rounded p-8 flex flex-col items-center py-20">
      <h2 className="flex text-3xl">
        <p className="border-red-400 flex align-center rounded-full border-2 h-8 w-8 mr-4">
          <span className="w-full flex items-center justify-center text-base">{campaignState.type === "LEMLIST" ? 4 : 5}</span>
        </p>
        Select locations (if any)
      </h2>
      <div className="mt-4 flex w-full">
        <div className='flex text-3xl'>
          <input value={locality} onChange={e => setLocality(e.currentTarget.value)} type="text" className="bg-gray-100 w-40 h-12 text-xl outline-red-400 cursor-pointer focus:cursor-default" />
          <div onClick={() => setCampaignState({ ...campaignState, leadFilters: { ...campaignState.leadFilters, localities: [...campaignState.leadFilters.localities, locality] } })} className='ml-4 flex justify-center items-center rounded-lg h-12 w-16 bg-red-200 hover:bg-red-400'>
            <ArrowForwardIcon />
          </div>
        </div>
        {campaignState.leadFilters.localities.map((locality: any) =>
          <div onClick={() => setCampaignState({ ...campaignState, leadFilters: { ...campaignState.leadFilters, localities: campaignState.leadFilters.localities.filter((i: any) => i !== locality) } })} className='ml-4 flex justify-center items-center rounded-lg h-12 w-16 bg-red-200 hover:bg-red-400'>
            {locality}
          </div>)}
      </div>
    </div>
    <div className="border-red-200 hover:border-red-400 mt-8 border-2 rounded p-8 flex flex-col items-center py-20">
      <h2 className="flex text-3xl">
        <p className="border-red-400 flex align-center rounded-full border-2 h-8 w-8 mr-4">
          <span className="w-full flex items-center justify-center text-base">{campaignState.type === "LEMLIST" ? 5 : 6}</span>
        </p>
        Lastly, what shall we call this campaign?
      </h2>
      <div className="mt-4 flex">
        <input value={name} onChange={e => setName(e.currentTarget.value)} type="text" className="bg-gray-100 w-96 h-12 text-xl outline-red-400 cursor-pointer focus:cursor-default" />
        <div onClick={() => createCampaign(name)} className='ml-4 flex justify-center items-center rounded-lg h-12 w-16 bg-red-200 hover:bg-red-400'>
          <ArrowForwardIcon />
        </div>
      </div>
    </div>
  </div>
}


export default CreateCampaignForm