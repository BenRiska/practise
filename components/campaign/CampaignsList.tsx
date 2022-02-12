import Link from "next/link";
import { useState } from "react"

const getStatusText = (status: any) => {
  switch (status) {
    case "READY":
      return "Draft"
    case "ONGOING":
      return "Active"
    case "COMPLETE":
      return "Complete"
    default:
      return "N/A"
  }
}

const CampaignsList = ({ campaigns, filter, setFilter }: any) => {

  const [activeFilter, setActiveFilter] = useState("ALL")

  return <div className="mx-auto">
    <div className="flex py-2" style={{ borderBottom: "2px solid rgba(243, 244, 246, 1)" }}>
      <p onClick={() => setActiveFilter("ALL")} className={`${activeFilter === "ALL" ? "text-red-400" : "text-gray-400"} relative cursor-pointer w-16 flex justify-center`}>
        All
        {activeFilter === "ALL" && <div className="absolute top-8 h-1 w-full bg-red-400" style={{}} />}
      </p>
      <p onClick={() => setActiveFilter("MAIL")} className={`${activeFilter === "MAIL" ? "text-red-400" : "text-gray-400"} relative cursor-pointer w-16 flex justify-center`}>
        Mail
        {activeFilter === "MAIL" && <div className="absolute top-8 h-1 w-full bg-red-400" style={{}} />}
      </p>
      <p onClick={() => setActiveFilter("LEMLIST")} className={`${activeFilter === "LEMLIST" ? "text-red-400" : "text-gray-400"} relative cursor-pointer w-16 flex justify-center`}>
        Lemlist
        {activeFilter === "LEMLIST" && <div className="absolute top-8 h-1 w-full bg-red-400" style={{}} />}
      </p>
    </div>
    <div className="mb-4 mt-8">
      <input value={filter} onChange={e => setFilter(e.currentTarget.value)} placeholder="Filter by name.." className="w-full p-2 focus:outline-red-400" style={{ border: "2px solid rgba(243, 244, 246, 1)" }} type="text" />
    </div>
    <div style={{ borderBottom: "2px solid rgba(243, 244, 246, 1)" }} className="flex py-4 items-center">
      <div style={{ flex: 0.3 }} className="font-semibold">Name</div>
      <div style={{ flex: 0.3 }} className="font-semibold">Type</div>
      <div style={{ flex: 0.3 }} className="font-semibold">Leads</div>
      <div style={{ flex: 0.3 }} className="font-semibold">Cost</div>
      <div style={{ flex: 0.3 }} className="font-semibold">Status</div>
    </div>
    {campaigns.filter((campaign: any) => activeFilter === "ALL" ? true : activeFilter === "MAIL" ? campaign.type === "DIRECT_MAIL" : campaign.type === "LEMLIST").filter((campaign: any) => filter.length > 0 ? campaign.name.toLowerCase().includes(filter.toLowerCase()) : true).map((campaign: any) =>
      <Link href={`/campaigns/${campaign.name}`}>
        <div className="flex flex-1 py-4 items-center relative text-sm lead-item text-gray-500 hover:text-black">
          <div style={{ flex: 0.3 }} className="font-lighter text-red-400">{campaign.name}</div>
          <div style={{ flex: 0.3 }} className="font-lighter">{campaign.type}</div>
          <div style={{ flex: 0.3 }} className="font-lighter">{campaign.companyCampaigns?.length}</div>
          <div style={{ flex: 0.3 }} className={`font-lighter `}>{campaign.campaignCost
            ? `£${(campaign.campaignCost * campaign.companyCampaigns.length).toFixed(2)}`
            : "N/A"}
          </div>
          <div style={{ flex: 0.3 }}>{getStatusText(campaign?.status)}</div>
        </div>
      </Link>)
    }
  </div >
}

export default CampaignsList