import ArrowForwardIcon from '@mui/icons-material/ArrowForward';



const CampaignCategory = ({ setCampaignState, campaignState, setCurrentSlide }: any) => {

  return <div className="border-red-200 hover:border-red-400 mt-8 border-2 rounded p-8 flex flex-col items-center py-20">
    <h2 className="flex text-3xl">
      <p className="border-red-400 flex align-center rounded-full border-2 h-8 w-8 mr-4">
        <span className="w-full flex items-center justify-center text-base">{campaignState.type === "LEMLIST" ? 5 : 6}</span>
      </p>
      Lastly, what shall we call this campaign?
    </h2>
    <div className="mt-4 flex">
      <input value={campaignState.name} onChange={e => setCampaignState({ ...campaignState, name: e.currentTarget.value })} type="text" className="bg-gray-100 w-96 h-12 text-xl outline-red-400 cursor-pointer focus:cursor-default" />
      <div onClick={() => setCurrentSlide("CONFIRM_CAMPAIGN")} className='ml-4 flex justify-center items-center rounded-lg h-12 w-16 bg-red-200 hover:bg-red-400'>
        <ArrowForwardIcon />
      </div>
    </div>
  </div>
}

export default CampaignCategory