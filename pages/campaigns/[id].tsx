import type { NextPage } from 'next'
import Head from 'next/head'
import {useEffect} from "react"
import Axios from 'axios'



const Campaign: NextPage = () => {

 


  // const getData = async () => {
  //   const { data } = await Axios.get(`api/campaigns/all`);
  //   console.log(data);
    
  // }

  // useEffect( () => {
  //   getData();
  // })

  return (
    <div style={{minHeight: "100vh"}}>
      <Head>
        <title>Ember | SSGM</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    Hi
    </div>
  )
}

export default Campaign