import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState } from "react"

const CampaignCategory = ({ setCampaignState, campaignState, setCurrentSlide }: any) => {
  const [locality, setLocality] = useState("")
  return <div className="py-8 flex flex-col">
    <h2 className="flex text-2xl">
      <p className="border-red-400 flex align-center rounded-full border-2 h-8 w-8 mr-4">
        <span className="w-full flex items-center justify-center text-base">{campaignState.type === "LEMLIST" ? 4 : 5}</span>
      </p>
      Select locations (if any)
    </h2>
    <div className="mt-4 flex flex-col w-full">
      <div className='flex text-2xl'>
        <input value={locality} onChange={e => setLocality(e.currentTarget.value)} type="text" className="bg-gray-100 w-32 h-8 text-base outline-red-400 cursor-pointer focus:cursor-default" />
        <div onClick={() => setCampaignState({ ...campaignState, leadFilters: { ...campaignState.leadFilters, localities: [...campaignState.leadFilters.localities, locality] } })} className='ml-4 flex justify-center items-center rounded-lg h-8 w-12 bg-red-200 hover:bg-red-400'>
          <ArrowForwardIcon fontSize='small' />
        </div>
      </div>
      <div className='flex space-x-4 mt-4'>
        {campaignState.leadFilters.localities.map((locality: any) =>
          <div onClick={() => setCampaignState({ ...campaignState, leadFilters: { ...campaignState.leadFilters, localities: campaignState.leadFilters.localities.filter((i: any) => i !== locality) } })} className=' flex justify-center items-center rounded-lg h-8 w-16 bg-red-200 hover:bg-red-400'>
            {locality}
          </div>)}
      </div>
    </div>

    <button onClick={() => setCurrentSlide("CAMPAIGN_NAME")}>Next</button>
  </div>
}

export default CampaignCategory