import Head from 'next/head';
import SearchAppBar from './app-bar';
import Copyright from './copyright';

export default function Layout({ children }) {
    return (<div><SearchAppBar />
    <Head>
        <title>Tiệm Vật Tư</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    {children}
    <footer>        
          Powered by{' trqtrung '}        
        <Copyright/>
      </footer>
    </div>);
}
