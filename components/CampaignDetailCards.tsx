

const CampaignDetailCards = () => {
  return (
  <div className="flex items-center mt-12 justify-between">
      <div className="w-1/4 flex relative items-center p-4 justify-center bg-red-400 rounded-2xl">
        <span className="absolute text-sm text-red-400 bottom-16 left-2">Campaign Type</span>
        <p className="text-xl">Lemlist</p>
      </div>
      <div className="w-1/4 flex relative items-center p-4 justify-center bg-green-200 rounded-2xl">
        <span className="absolute text-sm text-green-200 bottom-16 left-2">Total Cost</span>
        <p className="text-xl">£2701.49</p>
      </div>
      <div className="w-1/4 flex relative items-center p-4 justify-center bg-yellow-200 rounded-2xl">
      < span className="absolute text-sm text-yellow-200 bottom-16 left-2">Cost Per Aquisition</span>
        <p className="text-xl">£347.34</p>
      </div>
  </div>
  )
}

export default CampaignDetailCards