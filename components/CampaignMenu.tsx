import UploadFileIcon from '@mui/icons-material/UploadFile';
import GroupsIcon from '@mui/icons-material/Groups';

const CampaignMenu = ({campaign}: any) => {
  return <div className='p-8 max-w-7xl mx-auto'>
            <div className="flex justify-between">
              <div className='flex shadow px-4 py-3 rounded-lg space-x-2 items-center cursor-pointer'>
                <GroupsIcon/>
                <p>{campaign?.companyCampaigns.length}</p>
              </div>
              <div className='flex items-center'>
                <a href={`https://pdf.ember.co/api/pdf?letter_template=${campaign?.template}`} target={"_blank"} className="px-4 py-3.5 rounded-lg shadow cursor-pointer">
                  <UploadFileIcon/>
                </a>
                <div>
                  <p className='bg-green-100 px-4 py-3 rounded-lg ml-4 shadow'>{campaign?.status}</p>
                </div>
              </div>
            </div>
            <div className='mt-8'>
                <h1 className='text-5xl'>{campaign?.name}</h1>
            </div>
         </div>
}

export default CampaignMenu;