import moment from "moment"
import title from "title";
import map from "../utils/sic-map.json";

const LeadsList = ({leads}: any) => {
  return <div className="mx-auto mt-12 shadow">
            <div style={{borderBottom: "1px solid rgba(243, 244, 246, 1)"}} className="flex px-4 py-6 items-center">
                <div style={{flex: 0.07}}/>
                <div style={{flex: 0.3}} className="">Company</div>
                <div style={{flex: 0.2}} className="">Formed</div>
                <div style={{flex: 0.1}} className="">Age</div>
                <div style={{flex: 0.2}} className="">Location</div>
                <div style={{flex: 0.3}} className="">Industry</div>
                <div style={{flex: 0.1}} className="">Address</div>
            </div>
            {leads?.map((lead: any, index: number) => lead.directors.map((director: any) =>  <div className="flex flex-1 p-4 items-center relative text-sm lead-item">
                    <div className="flex justify-center" style={{flex: 0.07}}>{index + 1}</div>
                    <div style={{flex: 0.3}} className="">
                        <h2>{director?.firstName + " " + director?.lastName}{" "}</h2>
                        <p style={{fontSize: 10}} className="text-blue">{lead.companyName}</p>
                    </div>
                    <div style={{flex: 0.2}} className="">{moment(lead.createdAt).fromNow()}</div>
                    <div style={{flex: 0.1}} className=""> {director?.dateOfBirth
                        ? moment().diff(moment(director?.dateOfBirth), "years")
                        : "-"}</div>
                    <div style={{flex: 0.2}} className=""> {lead.registeredAddress.locality}</div>
                    <div style={{flex: 0.3}} className="">{lead?.industries
                        // @ts-ignore
                        ?.map((industry: any) => title(map[industry] || "Unknown"))
                        .join(", ")
                        .slice(0, 30) + "..."}</div>
                    <div style={{flex: 0.1}} className="">{lead.isAddressUnique ? "✅" : "❌"}</div>
                    <div style={{width: "97%"}} className="absolute h-0.5 bg-gray-100 bottom-0 right-0"/>
                </div>
            ))}
          </div>
}

export default LeadsList