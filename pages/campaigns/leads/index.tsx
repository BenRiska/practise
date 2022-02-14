import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import { useEffect } from "react"
import Axios from 'axios'
import LeadsMenu from '../../../components/leads/LeadsMenu'
import LeadsList from '../../../components/leads/LeadsList'

type IFilter = { age: { min: number; max: number; }; locations: []; classifications: []; address: boolean; email: boolean; linkedin: boolean }

const Leads: NextPage = () => {

  const [leads, setLeads]: any = useState<[]>([])
  const [page, setPage] = useState<number>(1)
  const [filter, setFilter] = useState<IFilter>({ age: { min: 0, max: 99 }, locations: [], classifications: [], address: false, email: false, linkedin: false })

  const getData = async () => {
    const { data } = await Axios.post(`/api/campaigns/leads/all`, { page, filter });
    setLeads(data.companies)
  }
  useEffect(() => {
    getData();
  }, [])

  const fetchMoreCompanies = async () => {
    const newPage: number = page + 1
    const { data } = await Axios.post(`/api/campaigns/leads/all`, { page, filter });
    setPage(newPage)

    setLeads([...leads, ...data.companies])
  }

  const adjustFilter = async (key: any, val: any) => {
    const newFilter: IFilter = { ...filter, [key]: val }
    const newPage: number = 1
    const { data } = await Axios.post(`/api/campaigns/leads/all`, { page: newPage, filter: newFilter });
    setFilter(newFilter)
    setPage(1)
    setLeads(data.companies)
  }

  return (
    <div className='px-12' style={{ minHeight: "100vh" }}>
      <Head>
        <title>Ember | SSGM | Leads</title>
        <meta name="description" content="Very leads, much acquisition" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LeadsMenu filter={filter} adjustFilter={adjustFilter} />
      <div className="mt-40" />
      <LeadsList leads={leads} />
      <div className="mx-auto my-12">
        <p onClick={fetchMoreCompanies} className="text-red-400 text-lg mx-auto w-28 cursor-pointer">Load More</p>
      </div>
    </div>
  )
}

export default Leads