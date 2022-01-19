import type { NextPage } from 'next'
import {useState} from "react"
import Head from 'next/head'
import { useRouter } from "next/router";
import {useEffect} from "react"
import Axios from 'axios'
import CampaignMenu from '../../components/CampaignMenu';
import CampaignDetailCards from '../../components/CampaignDetailCards';
import DirectorAgeChart from '../../components/DirectorAgeChart';
import CompanyLocationChart from '../../components/CompanyLocationChart';
import CampaignCostChart from "../../components/CampaignCostChart"




const Campaign: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [campaign, setCampaign] = useState(null);

  
  

  useEffect(() => {
    async function getCampaign() {
      const data = await Axios.post(`/api/campaigns/get`, {
        campaign_name: id
      });
     
      setCampaign(data.data);
    }
    getCampaign();
  }, []);

  return (
    <div className='p-8 max-w-7xl mx-auto' style={{minHeight: "100vh"}}>
      <Head>
        <title>Ember | SSGM</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CampaignMenu setCampaign={setCampaign} campaign={campaign}/>
      <div className='flex justify-between w-full'>
        <CampaignDetailCards campaign={campaign} />
        <div className='flex flex-col w-2/3 ml-12 space-y-12 justify-between mt-8'>
          {/* @ts-ignore*/}
          <DirectorAgeChart idName="chart1" campaign={campaign?.id} />
            {/* @ts-ignore*/}
          <CompanyLocationChart idName="chart2" campaign={campaign?.id} />
          {/* @ts-ignore*/}
          <CampaignCostChart idName="chart3" campaign={campaign?.id} />
        </div>
      </div>
    </div>
  )
}

export default Campaign