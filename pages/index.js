import Banner from '@/components/Banner';
import Row from '@/components/Row';
import requests from '@/utils/requests';
import Head from 'next/head';
import Image from 'next/image';
export default function Home({ popularMovies,forYou }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/* Header en _app.js */}
      <Banner popularMovies={popularMovies.slice(0,6)} />
       <Row titulo ={'Solo para ti'} movies={forYou} gradient={true} slides={6}/> 
      {/* Mi lista */}
      {/* Explora por género */}
      {/* En tendencia */}
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(requests.fetchPopular);
  const data = await res.json();
  const popular = data.results;

  const res2 = await fetch(requests.fetchForYou);
  const data2 = await res2.json();
  const forYouMovies = data2.results;

  return {
    props: {
      popularMovies: popular,
      forYou: forYouMovies
    },
  };
}
