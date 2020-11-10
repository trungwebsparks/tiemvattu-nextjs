
import Button from '@material-ui/core/Button'
import Skeleton from '@material-ui/lab/Skeleton'

import useSWR from 'swr'

import fetch from 'node-fetch'
import https from 'https'
import Layout from '../components/layout'

export async function getStaticProps() {
  //const https = require('https');

const httpsAgent = new https.Agent({
      rejectUnauthorized: false,
    });
    let data = [];
  // Get external data from the file system, API, DB, etc.
  try{
  const res = await fetch('https://tiemvattu.com/api/products/homepage',{
    method:'GET',
    agent:httpsAgent,
    headers: {
      'Content-Type': 'application/json'
    },
  });
  //console.log('response day ne ',res);
  data = await res.json();
  console.log(data);
}catch(err){
  console.log('error',err)
}

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: {
      data  
    }
  }
}

export default function Home({data}) {
  return (
    <Layout>    
      <main>
        {
          data.map((item) =>
            <div>              
              <img src={"https://tiemvattu.com/api/Files/GetFile?path="+item.thumbnailPath} width="200"></img>
              <p>{item.name}</p>              
            </div>
          )
        }
      </main>   
    </Layout>
  )
}

//React hook for data fetching called SWR
//highly recommend it if you’re fetching data on the client side. It handles caching, revalidation, focus tracking, refetching on interval, and more
// function Products(){
//   const fetcher = (...args) => fetch(...args).then(res => res.json())
//   const {data,error} = useSWR('https://www.tiemvattu.com/api/products/homepage', fetcher)

//   if(error) return <div>failed to load...</div>
//   if(!data) return <div>loading...</div>

//   return <div>Có {data.length} sản phẩm</div>

// }




