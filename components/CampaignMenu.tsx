import UploadFileIcon from '@mui/icons-material/UploadFile';
import GroupsIcon from '@mui/icons-material/Groups';
import axios from 'axios';
import EditableLabel from 'react-inline-editing';
import Axios from 'axios'
import getCampaignType from "../utils/getCampaignType"

const downloadCsv = (string) => {
  var blob = new Blob([string]);
  if (window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveBlob(blob, "filename.csv");
  } else {
    var a = window.document.createElement("a");

    a.href = window.URL.createObjectURL(blob);
    a.download = "leads.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
}

const CampaignMenu = ({ campaign, setCampaign }: any) => {

  async function downloadLeadList() {
    console.log("hit")
    const csv = await axios.post(`/api/util/csv`, {
      campaign_id: campaign?.id
    });
    downloadCsv(csv.data);
  }

  const updateCampaignName = async (text: any) => {
    console.log("hit")
    const data = await Axios.post(`/api/util/updateCampaignName`, {
      campaign_id: campaign.id,
      name: text
    });
    setCampaign(data.data);
  }
  return <div>
    <div className="flex justify-between mt-4">
      <div className='flex items-center'>
        <div className='relative'>
          <span className="absolute text-xs  bottom-10 left-0">STATUS</span>
          <p className='bg-green-200 text-white w-36 justify-center flex px-4 py-3 text-sm h-10 flex items-center rounded-lg shadow'>{campaign?.status}</p>
        </div>
        {campaign?.industries.map((industry: any) => <a href={`https://www.siccode.co.uk/sic2007/code-${industry}`} target="_blank" className='flex text-sm shadow ml-4 bg-gray-100 px-4 h-10 rounded-lg space-x-2 items-center cursor-pointer'>{industry}</a>)}
      </div>
      <div className='flex'>
        <div className="flex ml-4 h-10 relative items-center px-4 justify-center bg-red-400 w-36 rounded-lg">
          <span className="absolute text-xs text-red-400 bottom-10 left-0">CAMPAIGN TYPE</span>
          <p className=" text-white">{getCampaignType(campaign?.type)}</p>
        </div>
        <div className="flex ml-4 h-10 relative items-center px-4 justify-center bg-green-200 w-36 rounded-lg">
          <span className="absolute text-xs text-green-200 bottom-10 left-0">TOTAL COST</span>
          <p className="text-xl text-white">£{campaign?.campaignCost ? (campaign.campaignCost * campaign._count.companyCampaigns).toFixed(2) : "0"}</p>
        </div>
        <div className="flex ml-4 h-10 relative items-center px-4 justify-center bg-yellow-300 w-36 rounded-lg">
          <span className="absolute text-xs text-yellow-300 bottom-10 left-0">COST PER AQUISITION</span>
          <p className="text-xl text-white">£347.34</p>
        </div>
      </div>
      <div className='flex items-center relative'>
        <div onClick={() => downloadLeadList()} className='flex shadow relative px-4 h-10 rounded-lg space-x-2 w-36 justify-center items-center cursor-pointer'>
          <span className="absolute text-xs bottom-10 left-0">LEADS</span>
          <GroupsIcon />
          <p onClick={() => downloadLeadList()} className='text-sm'>{campaign?._count.companyCampaigns}</p>
        </div>
        {campaign?.template && <div className='relative ml-4'>
          <span className="absolute text-xs bottom-10 left-0">TEMPLATE</span>
          <a href={`https://pdf.ember.co/api/pdf?letter_template=${campaign.template}`} target={"_blank"} className="px-4 w-36 flex justify-center py-3.5 h-10 flex items-center rounded-lg shadow cursor-pointer">
            <UploadFileIcon />
          </a>
        </div>}
      </div>
    </div>
    <div className='mt-4'>
      {campaign && <EditableLabel text={campaign?.name}
        labelClassName='cursor-pointer text-5xl'
        inputClassName='text-5xl focus:outline-red-400'
        inputWidth='100%'
        inputHeight='48px'
        inputMaxLength='200'
        labelFontWeight='medium'
        inputFontWeight='medium'
        onFocus={() => null}
        onFocusOut={updateCampaignName}
      />}
    </div>
  </div>
}

export default CampaignMenu;