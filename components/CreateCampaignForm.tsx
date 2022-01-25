import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const CreateCampaignForm = () => {
  return <div className='my-12'>
    <div className="border-red-200 hover:border-red-400 mt-8 border-2 rounded p-8 flex flex-col items-center">
      <h2 className="flex">
        <p className="border-red-400 flex align-center rounded-full border-2 h-8 w-8 mr-4">
          <span className="w-full flex items-center justify-center">1</span>
        </p> 
        What is the category of your campaign?
      </h2>
      <div className="mt-8 flex space-x-8">
          <div className="p-4 text-3xl bg-red-200 hover:bg-red-400 rounded-lg w-40 h-16 flex justify-center cursor-pointer">Lemlist</div>
          <div className="p-4 text-3xl bg-red-200 hover:bg-red-400 rounded-lg w-40 h-16 flex justify-center cursor-pointer">Mail</div>
      </div>
    </div>
    <div className="border-red-200 mt-8 border-2 rounded p-8 flex flex-col items-center">
      <h2 className="flex">
        <p className="border-red-400 flex align-center rounded-full border-2 h-8 w-8 mr-4">
          <span className="w-full flex items-center justify-center">2</span>
        </p> 
        Which template should be used? 
      </h2>
      <div className='flex mt-4'>
        <div className='w-32 h-48 bg-red-200 flex justify-center items-center'>Template</div>
        <div className='w-32 ml-4 h-48 bg-red-200 flex justify-center items-center'>Template</div>
        <div className='w-32 ml-4 h-48 bg-red-200 flex justify-center items-center'>Template</div>
        <div className='w-32 ml-4 h-48 bg-red-200 flex justify-center items-center'>Template</div>
      </div>
    </div>
    <div className="border-red-200 mt-8 border-2 rounded p-8 flex flex-col items-center">
      <h2 className="flex">
        <p className="border-red-400 flex align-center rounded-full border-2 h-8 w-8 mr-4">
          <span className="w-full flex items-center justify-center">3</span>
        </p> 
        Select industries (if any)
      </h2>
      <div className="mt-4 flex w-full">
        <div className='flex'>
          <input type="text" className="bg-gray-100 w-40 h-16 text-3xl outline-red-400 cursor-pointer focus:cursor-default"/>
          <div className='ml-4 flex justify-center items-center rounded-lg h-16 w-16 bg-red-200 hover:bg-red-400'>
            <ArrowForwardIcon/>
          </div>
        </div>
      </div>
    </div>
    <div className="border-red-200 mt-8 border-2 rounded p-8 flex flex-col items-center">
      <h2 className="flex">
        <p className="border-red-400 flex align-center rounded-full border-2 h-8 w-8 mr-4">
          <span className="w-full flex items-center justify-center">4</span>
        </p> 
        Lastly, what shall we call this campaign?
      </h2>
      <div className="mt-4">
        <input type="text" className="bg-gray-100 w-96 h-16 text-3xl outline-red-400 cursor-pointer focus:cursor-default"/>

      </div>
    </div>
  </div>
}


export default CreateCampaignForm