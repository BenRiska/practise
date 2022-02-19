const CampaignCategory = ({ setCampaignState, campaignState, setCurrentSlide }: any) => {
  return <div className="border-red-200 hover:border-red-400 mt-4 border-2 rounded p-8 flex flex-col items-center py-20">
    <h2 className="flex text-3xl">
      <p className="border-red-400 flex align-center rounded-full border-2 h-8 w-8 mr-4">
        <span className="w-full flex items-center justify-center text-base">1</span>
      </p>
      What is the category of your campaign?
    </h2>
    <div className="mt-8 flex space-x-8">
      <div onClick={() => {
        setCampaignState({ ...campaignState, type: "LEMLIST" })
        setCurrentSlide("LEAD_CRITERIA")
      }} className={`flex items-center justify-center text-xl ${campaignState.type === "LEMLIST" ? "bg-red-400" : "bg-red-200"}  hover:bg-red-400 rounded-lg w-40 h-12 flex justify-center cursor-pointer`}>Lemlist</div>
      <div onClick={() => {
        setCampaignState({ ...campaignState, type: "MAIL" })
        setCurrentSlide("CAMPAIGN_TEMPLATE")
      }} className={`flex items-center justify-center text-xl ${campaignState.type === "MAIL" ? "bg-red-400" : "bg-red-200"}  hover:bg-red-400 rounded-lg w-40 h-12 flex justify-center cursor-pointer`}>Mail</div>
    </div>
  </div>
}

export default CampaignCategory