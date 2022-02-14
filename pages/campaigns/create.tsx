import type { NextPage } from 'next'
import Head from 'next/head'
import CreateCampaignForm from '../../components/charts/CreateCampaignForm'
import { useState } from "react"

type ICampaignForm = {
  type: string;
  name: string;
  template: number | null;
  lemlistName: string;
  lemlistId: string;
  leadFilters: {
    localities: [];
    classifications: [];
    take: number | null;
    ageRange: {
      min: number | null;
      max: number | null;
    };
    companyAge: {
      min: number | null;
      max: number | null;
    },
    required: { email: boolean; linkedin: boolean; address: boolean; }
  }
}


const CreateCampaign: NextPage = () => {

  const [campaignState, setCampaignState] = useState<ICampaignForm>(
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

  const createCampaign = (name: string) => {
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

export default CreateCampaign