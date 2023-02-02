import Banner from '@/components/Banner';
import Row from '@/components/Row';
import { AppContext } from '@/context/AppContext';
import requests from '@/utils/requests';
import Head from 'next/head';
import { useContext } from 'react';


export default function Home({ popularMovies, forYou, bestMovies, popularTV }) {
  const {myList} = useContext(AppContext)

  let myListLength 
  if (myList.length > 5) {
    myListLength = 5
  } else {
    myListLength = myList.length
  }
  
  return (
    <>
      <Head>
        <title>HBO Max</title>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name='description' content='Desarrollado por Martín Morici' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      
      <Banner popularMovies={popularMovies.slice(0,6)} />
    
      <Row titulo={'Solo para ti'} movies={forYou} gradient={true} slides={5}/> 
      {myList.length >= 1 ? <Row titulo={'Mi lista'} movies={myList} slides={myListLength}/> : null }
      <Row titulo={'Mejor valoradas'} movies={bestMovies} best={true}  slides={5}/> 
      <Row titulo={'Explora por género'} gradient={false} genero={true} slides={8}/> 
      <Row tendencia={true} tvshow={true} movies={popularTV.slice(0,10)} slides={4}/> 
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

  const res3 = await fetch(requests.fetchBest);
  const data3 = await res3.json();
  const rated = data3.results;

  const res4 = await fetch(requests.fetchTVPopular);
  const data4 = await res4.json();
  const tv = data4.results;

  return {
    props: {
      popularMovies: popular,
      forYou: forYouMovies,
      bestMovies: rated,
      popularTV: tv,
    },
  };
}
