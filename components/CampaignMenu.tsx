import UploadFileIcon from '@mui/icons-material/UploadFile';
import GroupsIcon from '@mui/icons-material/Groups';
import axios from 'axios';

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

const CampaignMenu = ({campaign}: any) => {

  async function downloadLeadList() {
    console.log("hit")
    const csv = await axios.post(`/api/util/csv`, {
      campaign_id: campaign?.id
    });
    downloadCsv(csv.data);
  }
  return <div>
            <div className="flex justify-between">
              <div className='flex items-center'>
                <div className='flex shadow px-4 h-10 rounded-lg space-x-2 items-center cursor-pointer'>
                  <GroupsIcon/>
                  <p onClick={() => downloadLeadList()} className='text-sm'>{campaign?._count.companyCampaigns}</p>
                </div>
                {campaign?.industries.map((industry: any) => <a href={`https://www.siccode.co.uk/sic2007/code-${industry}`} target="_blank" className='flex text-sm shadow ml-4 bg-gray-100 px-4 h-10 rounded-lg space-x-2 items-center cursor-pointer'>{industry}</a>)}
              </div>
              <div className='flex items-center'>
                {campaign?.template && <a href={`https://pdf.ember.co/api/pdf?letter_template=${campaign.template}`} target={"_blank"} className="px-4 py-3.5 h-10 flex items-center rounded-lg shadow cursor-pointer">
                  <UploadFileIcon/>
                </a>}
                <div>
                  <p className='bg-green-200 text-white px-4 py-3 text-sm h-10 flex items-center rounded-lg ml-4 shadow'>{campaign?.status}</p>
                </div>
              </div>
            </div>
            <div className='mt-8'>
                <h1 className='text-5xl'>{campaign?.name}</h1>
            </div>
         </div>
}

export default CampaignMenu;