const CampaignCategory = ({ campaignState, createCampaign }: any) => {
  return <div className="border-red-200 hover:border-red-400 mt-8 border-2 rounded p-8 flex flex-col items-center py-20">
    <button onClick={createCampaign}>Next</button>
  </div>
}

export default CampaignCategory