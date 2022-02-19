const CampaignCategory = ({ setCampaignState, campaignState, setCurrentSlide }: any) => {
  return <div className="border-red-200 hover:border-red-400 mt-8 border-2 rounded p-8 flex flex-col items-center py-20">
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
    <button onClick={() => setCurrentSlide("CAMPAIGN_INDUSTRIES")}>Next</button>
  </div>
}

export default CampaignCategory