import Link from "next/link";

const CampaignsList = ({campaigns, filter}: any) => {
return <div className="mx-auto mt-28 shadow">
            <div style={{borderBottom: "1px solid rgba(243, 244, 246, 1)"}} className="flex px-4 pb-6 pt-8 items-center">
                <div style={{flex: 0.07}}/>
                <div style={{flex: 0.3}} className="font-semibold">Name</div>
                <div style={{flex: 0.3}} className="font-semibold">Type</div>
                <div style={{flex: 0.3}} className="font-semibold">Leads</div>
                <div style={{flex: 0.3}} className="font-semibold">Cost</div>
            </div>
            {campaigns.filter((campaign: any) => filter.length > 0 ? campaign.name.toLowerCase().includes(filter.toLowerCase()) : true).map((campaign: any, index: number) => <Link href={`/campaigns/${campaign.name}`}>
              <div className="flex flex-1 p-4 items-center relative text-sm lead-item">
                <div className="flex justify-center" style={{flex: 0.07}}>{index + 1}</div>
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