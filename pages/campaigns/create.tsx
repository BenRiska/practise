import type { NextPage } from 'next'
import Head from 'next/head'
import CreateCampaignForm from '../../components/charts/CreateCampaignForm'
import { useState } from "react"
import CampaignCategory from '../../components/campaign/CampaignCategory'
import LeadCriteria from '../../components/campaign/LeadCriteria'
import CampaignTemplate from '../../components/campaign/CampaignTemplate'
import CampaignIndustries from '../../components/campaign/CampaignIndustries'
import CampaignLocations from '../../components/campaign/CampaignLocations'
import CampaignName from '../../components/campaign/CampaignName'
import ConfirmCampaign from '../../components/campaign/ConfirmCampaign'
import axios from 'axios'

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

const getCurrentSlide = (campaignState: any, setCampaignState: any, currentSlide: string, setCurrentSlide: any, createCampaign: any) => {
  switch (currentSlide) {
    case "CAMPAIGN_CATEGORY":
      return <CampaignCategory campaignState={campaignState} setCampaignState={setCampaignState} setCurrentSlide={setCurrentSlide} />
    case "LEAD_CRITERIA":
      return <LeadCriteria campaignState={campaignState} setCampaignState={setCampaignState} setCurrentSlide={setCurrentSlide} />
    case "CAMPAIGN_TEMPLATE":
      return <CampaignTemplate campaignState={campaignState} setCampaignState={setCampaignState} setCurrentSlide={setCurrentSlide} />
    case "CAMPAIGN_INDUSTRIES":
      return <CampaignIndustries campaignState={campaignState} setCampaignState={setCampaignState} setCurrentSlide={setCurrentSlide} />
    case "CAMPAIGN_LOCATIONS":
      return <CampaignLocations campaignState={campaignState} setCampaignState={setCampaignState} setCurrentSlide={setCurrentSlide} />
    case "CAMPAIGN_NAME":
      return <CampaignName campaignState={campaignState} setCampaignState={setCampaignState} setCurrentSlide={setCurrentSlide} />
    case "CONFIRM_CAMPAIGN":
      return <ConfirmCampaign campaignState={campaignState} setCampaignState={setCampaignState} setCurrentSlide={setCurrentSlide} createCampaign={createCampaign} />
    default:
      return null
  }

}

const handleBack = (currentSlide: any, setCurrentSlide: any, campaignType: any) => {
  switch (currentSlide) {
    case "LEAD_CRITERIA":
      return setCurrentSlide("CAMPAIGN_CATEGORY")
    case "CAMPAIGN_TEMPLATE":
      return setCurrentSlide("CAMPAIGN_CATEGORY")
    case "CAMPAIGN_INDUSTRIES":
      return setCurrentSlide(campaignType === "LEMLIST" ? "LEAD_CRITERIA" : "CAMPAIGN_TEMPLATE")
    case "CAMPAIGN_LOCATIONS":
      return setCurrentSlide("CAMPAIGN_INDUSTRIES")
    case "CAMPAIGN_NAME":
      return setCurrentSlide("CAMPAIGN_LOCATIONS")
    case "CONFIRM_CAMPAIGN":
      return setCurrentSlide("CAMPAIGN_NAME")
    default:
      return null
  }
}


const CreateCampaign: NextPage = () => {

  const [currentSlide, setCurrentSlide] = useState("CAMPAIGN_CATEGORY")
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

  const createCampaign = async () => {
    const data = await axios.post(`/api/campaigns/create`, {
      campaignState
    });
  }

  return (
    <div className='px-12 py-4 max-w-5xl mx-auto' style={{ minHeight: "100vh" }}>
      <Head>
        <title>Ember | SSGM</title>
        <meta name="description" content="much creation, very promise" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1 className='text-3xl'>Create Campaign</h1>
      </div>
      {currentSlide !== "CAMPAIGN_CATEGORY" && <button onClick={() => handleBack(currentSlide, setCurrentSlide, campaignState.type)} className='mt-4'>back</button>}
      {getCurrentSlide(campaignState, setCampaignState, currentSlide, setCurrentSlide, createCampaign)}
    </div>
  )
}

export default CreateCampaign