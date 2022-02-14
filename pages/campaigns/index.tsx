import type { NextPage } from 'next'
import Head from 'next/head'
import { IconButton } from "@material-ui/core";
import { useEffect, useState } from "react"
import Axios from 'axios'
import CampaignsList from '../../components/campaign/CampaignsList'
import AddIcon from '@mui/icons-material/Add';
import { useRouter } from 'next/router';

const Campaigns: NextPage = () => {

  const { replace } = useRouter();
  const [campaigns, setCampaigns] = useState<[]>([])
  const [filter, setFilter] = useState<string>("")

  const getData = async () => {
    const { data } = await Axios.get(`api/campaigns/all`);
    setCampaigns(data)
  }

  useEffect(() => {
    getData();
  })

  return (
    <div className='px-12 py-4 mx-auto' style={{ minHeight: "100vh" }}>
      <Head>
        <title>Ember | SSGM</title>
        <meta name="description" content="much campaign, very success" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='flex justify-between'>
        <h1 className='text-4xl'><span className='font-medium text-red-400'>SSGM</span> Campaigns</h1>
        <IconButton onClick={() => replace("/campaigns/create")}>
          <AddIcon />
        </IconButton>
      </div>
      <div className='mb-4 max-w-6xl text-gray-600'>
        <p>In assessing the key leveraging technology, one should think outside the box. On the other hand, any the bottom line can fully utilize the flexible manufacturing system. One must therefore dedicate resources to the marginalised empirical management option immediately.. In the light of a unique facet of the discipline of resource planning, it is clear that an unambiguous concept of the cohesive legitimisation makes little difference to the secondary complex flexibility. Therefore a maximum of flexibility is required.</p>
      </div>
      <CampaignsList filter={filter} setFilter={setFilter} campaigns={campaigns} />
    </div>
  )
}

export default Campaigns