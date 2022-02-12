import type { NextPage } from 'next'
import Head from 'next/head'
import CreateCampaignForm from '../../components/charts/CreateCampaignForm'
import { useState } from "react"


const Campaigns: NextPage = () => {

  const [campaignState, setCampaignState] = useState(
    {
      type: "",
      name: "",
      template: null,
      lemlistName: "",
      lemlistId: "",
      leadFilters: {
        ageRange: { min: null, max: null },
        localities: [],
        companyAge: { min: null, max: null },
        classifications: [],
        required: { email: false, linkedin: false, address: false },
        take: null
      }
    })

  const createCampaign = (name: any) => {
    setCampaignState({ ...campaignState, name })
  }

  return (
    <div className='px-12 py-4 max-w-5xl mx-auto' style={{ minHeight: "100vh" }}>
      <Head>
        <title>Ember | SSGM</title>
        <meta name="description" content="much creation, very promise" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='my-8'>
        <h1 className='text-3xl'>Create Campaign</h1>
      </div>
      <CreateCampaignForm createCampaign={createCampaign} campaignState={campaignState} setCampaignState={setCampaignState} />
    </div>
  )
}

export default Campaigns