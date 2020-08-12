import Head from 'next/head'
import Button from '@material-ui/core/Button'
import Skeleton from '@material-ui/lab/Skeleton'
import useSWR from 'swr'
import fetch from 'node-fetch'
import https from 'https'

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
  })
  console.log('response day ne ',res)
  data = await res.json();
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
    <div className="container">
      <Head>
        <title>Tiệm Vật Tư</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* <Products /> */}
        <h1>Sản phẩm nổi bật</h1>
       <div>
          <Button variant="contained" color="primary">
              Nhấn đây
          </Button>
        </div>
        <div>
          {
            data.length ? 
            data.map((item,index) =>(
              <li key={index}>
                 <img
                      alt="product-thumbnail"
                      width="100px;"
                      style={{ maxHeight: "100px" }}
                      loading="lazy"
                      src={`https://tiemvattu.com/api/Files/GetFile?path=${item.thumbnailPath}`}
                    />  {item.name}
              </li>
            )) : <Skeleton variant="rect" width={300} height={300}></Skeleton>
          }
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' trqtrung '}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>      
    </div>
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



