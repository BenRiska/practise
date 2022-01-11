import getCampaignType from "../utils/getCampaignType"


const CampaignDetailCards = ({campaign}: any) => {
  return (
  <div className=" mt-12 space-y-8 w-1/4">
      <div className="flex relative items-center p-4 justify-center bg-red-400 rounded-2xl">
        <span className="absolute text-sm text-red-400 bottom-16 left-2">CAMPAIGN TYPE</span>
        <p className="text-xl text-white">{getCampaignType(campaign?.type)}</p>
      </div>
      <div className="flex relative items-center p-4 justify-center bg-green-200 rounded-2xl">
        <span className="absolute text-sm text-green-200 bottom-16 left-2">TOTAL COST</span>
        <p className="text-xl text-white">£{campaign?.campaignCost ? (campaign.campaignCost * campaign._count.companyCampaigns).toFixed(2) : "0"}</p>
      </div>
      <div className="flex relative items-center p-4 justify-center bg-yellow-300 rounded-2xl">
      < span className="absolute text-sm text-yellow-300 bottom-16 left-2">COST PER AQUISITION</span>
        <p className="text-xl text-white">£347.34</p>
      </div>
  </div>
  )
}

export default CampaignDetailCards