import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState } from "react"

const CampaignCategory = ({ setCampaignState, campaignState, setCurrentSlide }: any) => {
  const [sic, setSic] = useState("")
  return <div className="border-red-200 hover:border-red-400 mt-8 border-2 rounded p-8 flex flex-col items-center py-20">
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
    <button onClick={() => setCurrentSlide("CAMPAIGN_LOCATIONS")}>Next</button>
  </div>
}

export default CampaignCategory