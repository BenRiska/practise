import Link from "next/link";

const CampaignsList = ({campaigns, filter}: any) => {
return <div className="mx-auto">
            <div className="flex py-2 space-x-8" style={{borderBottom: "2px solid rgba(243, 244, 246, 1)"}}>
              <p className="text-red-400 cursor-pointer">All</p>
              <p className="text-gray-400 cursor-pointer">Mail</p>
              <p className="text-gray-400 cursor-pointer">Lemlist</p>
            </div>
            <div className="mb-2 mt-6">
              <input value={filter} placeholder="Filter by name.." className="w-full p-2" style={{border: "2px solid rgba(243, 244, 246, 1)"}} type="text"/>
            </div>
            <div style={{borderBottom: "2px solid rgba(243, 244, 246, 1)"}} className="flex py-4 items-center">
                <div style={{flex: 0.3}} className="font-semibold">Name</div>
                <div style={{flex: 0.3}} className="font-semibold">Type</div>
                <div style={{flex: 0.3}} className="font-semibold">Leads</div>
                <div style={{flex: 0.3}} className="font-semibold">Cost</div>
            </div>
            {campaigns.filter((campaign: any) => filter.length > 0 ? campaign.name.toLowerCase().includes(filter.toLowerCase()) : true).map((campaign: any) => <Link href={`/campaigns/${campaign.name}`}>
              <div className="flex flex-1 py-4 items-center relative text-sm lead-item"> 
                <div style={{flex: 0.3}} className="font-lighter">{campaign.name}</div>
                <div style={{flex: 0.3}} className="font-lighter">{campaign.type}</div>
                <div style={{flex: 0.3}} className="font-lighter">{campaign.companyCampaigns?.length}</div>
                <div style={{flex: 0.3}} className="font-lighter">{campaign.campaignCost
                  ? `£${(campaign.campaignCost * campaign.companyCampaigns.length).toFixed(2)}`
                  : "N/A"}
                </div>
              </div>
            </Link>)}
       </div>
}

export default CampaignsList