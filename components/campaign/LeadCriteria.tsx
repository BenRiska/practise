const LeadCriteria = ({ setCampaignState, campaignState, setCurrentSlide }: any) => {
  return <div className="    py-8 flex flex-col  ">
    <h2 className="flex text-2xl">
      <p className="border-red-400 flex align-center rounded-full border-2 h-8 w-8 mr-4">
        <span className="w-full flex items-center justify-center text-base">2</span>
      </p>
      Lead Criteria
    </h2>
    <div className='flex flex-col justify-evenly mt-4 space-y-4'>
      <div className='ml-0'>
        <input className='outline-red-400' placeholder='Director Age (min)' onChange={e => setCampaignState({ ...campaignState, leadFilters: { ...campaignState.leadFilters, ageRange: { ...campaignState.leadFilters.ageRange, min: e.currentTarget.value } } })} value={campaignState.leadFilters.ageRange.min} type="number" />
        <input className='outline-red-400' placeholder='Director Age (max)' onChange={e => setCampaignState({ ...campaignState, leadFilters: { ...campaignState.leadFilters, ageRange: { ...campaignState.leadFilters.ageRange, max: e.currentTarget.value } } })} value={campaignState.leadFilters.ageRange.max} type="number" />
      </div>
      <div className='ml-0'>
        <input className='outline-red-400' placeholder='Company Age (min)' onChange={e => setCampaignState({ ...campaignState, leadFilters: { ...campaignState.leadFilters, companyAge: { ...campaignState.leadFilters.companyAge, min: e.currentTarget.value } } })} value={campaignState.leadFilters.companyAge.min} type="number" />
        <input className='outline-red-400' placeholder='Company Age (max)' onChange={e => setCampaignState({ ...campaignState, leadFilters: { ...campaignState.leadFilters, companyAge: { ...campaignState.leadFilters.companyAge, max: e.currentTarget.value } } })} value={campaignState.leadFilters.companyAge.max} type="number" />
      </div>
      <div className='flex-1'>
        <div className='flex items-center space-x-2'>
          <h2>Address</h2>
          <input className='outline-red-400' onChange={() => setCampaignState({ ...campaignState, leadFilters: { ...campaignState.leadFilters, required: { ...campaignState.leadFilters.required, address: !campaignState.leadFilters.required.address } } })} type="checkbox" checked={campaignState.leadFilters.required.address} />
        </div>
        <div className='flex items-center space-x-2'>
          <h2>Email</h2>
          <input className='outline-red-400' onChange={() => setCampaignState({ ...campaignState, leadFilters: { ...campaignState.leadFilters, required: { ...campaignState.leadFilters.required, email: !campaignState.leadFilters.required.email } } })} type="checkbox" checked={campaignState.leadFilters.required.email} />
        </div>
        <div className='flex items-center space-x-2'>
          <h2>Linkedin</h2>
          <input className='outline-red-400' onChange={() => setCampaignState({ ...campaignState, leadFilters: { ...campaignState.leadFilters, required: { ...campaignState.leadFilters.required, linkedin: !campaignState.leadFilters.required.linkedin } } })} type="checkbox" checked={campaignState.leadFilters.required.linkedin} />
        </div>
      </div>
      <div className='flex-1'>
        {campaignState.type === "MAIL" && <input className='outline-red-400' placeholder='Total sendees' onChange={e => setCampaignState({ ...campaignState, leadFilters: { ...campaignState.leadFilters, take: e.currentTarget.value } })} value={campaignState.leadFilters.take} type="number" />}
        {campaignState.type === "LEMLIST" && <div className='space-y-4'>
          <input className='w-full outline-red-400' placeholder='Lemlist Campaign Name' type="text" value={campaignState.lemlistName} onChange={e => setCampaignState({ ...campaignState, lemlistName: e.currentTarget.value })} />
          <input className='w-full outline-red-400' placeholder='Lemlist Campaign Id' type="text" value={campaignState.lemlistId} onChange={e => setCampaignState({ ...campaignState, lemlistId: e.currentTarget.value })} />
        </div>}
      </div>
    </div>
    <div className="mt-4">
      <h2>Reach</h2>
      <input placeholder="Reach.." type="number" value={campaignState.take} onChange={(e) => setCampaignState({ ...campaignState, take: e.currentTarget.value })} />
    </div>
    <button onClick={() => setCurrentSlide("CAMPAIGN_INDUSTRIES")}>Next</button>
  </div>
}

export default LeadCriteria