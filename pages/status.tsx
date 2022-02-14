import type { NextPage } from 'next'
import Head from 'next/head'
import StatusChart from '../components/StatusChart'

const Status: NextPage = () => {

  return (
    <div className='max-w-5xl mx-auto py-4' style={{ minHeight: "100vh" }}>
      <Head>
        <title>Ember | SSGM</title>
        <meta name="description" content="Much status, very info" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className='text-4xl'><span className='font-medium text-red-400'>SSGM</span> Status Dashboard</h1>
      <div style={{ height: 1 }} className='w-full bg-gray-200 my-2' />
      <p className='text-gray-500 text-sm'>This page provides status information on the services that are part of Ember Workspace. Check back here to view the current status of the services listed below. If you are experiencing an issue not listed here, please contact ben@ember.co, citing error code "YOU_FUCKED_UP". Learn more about what's posted on the dashboard in this FAQ. For additional information on these services, please visit https://haha.you-thought.com/. For incidents related to Ember Analytics, visit the Ember Ads Status Dashboard.</p>
      <StatusChart />
    </div>
  )
}

export default Status