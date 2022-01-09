import UploadFileIcon from '@mui/icons-material/UploadFile';
import GroupsIcon from '@mui/icons-material/Groups';

const CampaignMenu = ({campaign}: any) => {
  console.log(campaign)
  return <div>
            <div className="flex justify-between">
              <div className='flex items-center'>
                <div className='flex shadow px-4 h-10 rounded-lg space-x-2 items-center cursor-pointer'>
                  <GroupsIcon/>
                  <p className='text-sm'>{campaign?.companyCampaigns.length}</p>
                </div>
                {campaign?.industries.map((industry: any) => <div className='flex text-sm shadow ml-4 bg-gray-100 px-4 h-10 rounded-lg space-x-2 items-center cursor-pointer'>{industry}</div>)}
              </div>
              <div className='flex items-center'>
                {campaign?.template && <a href={`https://pdf.ember.co/api/pdf?letter_template=${campaign.template}`} target={"_blank"} className="px-4 py-3.5 h-10 flex items-center rounded-lg shadow cursor-pointer">
                  <UploadFileIcon/>
                </a>}
                <div>
                  <p className='bg-green-200 px-4 py-3 text-sm h-10 flex items-center rounded-lg ml-4 shadow'>{campaign?.status}</p>
                </div>
              </div>
            </div>
            <div className='mt-8'>
                <h1 className='text-5xl'>{campaign?.name}</h1>
            </div>
         </div>
}

export default CampaignMenu;