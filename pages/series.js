import Row from '@/components/Row';
import requests from '@/utils/requests';
import Head from 'next/head';

const Series = ({ tvPopular, topRated, latest, airingToday, onAir }) => {
  return (
    <>
      <Head>
        <title>HBO Max</title>
        <meta http-equiv='Content-Type' content='text/html;charset=UTF-8' />
        <meta name='description' content='Desarrollado por Martín Morici' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='pl-[28px] sm:pl-[36px] md:pl-[48px] lg:pl-[60px] pt-28'>
        <Row
          titulo={'Shows en tendencia'}
          tvshow={true}
          movies={tvPopular.slice(0, 10)}
          slides={5}
        />
        <Row
          titulo={'Mejor valoradas'}
          best={true}
          tvshow={true}
          movies={topRated.slice(0, 10)}
          slides={5}
        />
        {/* <Row titulo={'Mas nuevos'}  tvshow={true} movies={latest} slides={5}/>  */}
        <Row
          titulo={'Estrenan hoy'}
          tvshow={true}
          movies={airingToday}
          slides={5}
        />
        <Row titulo={'Ya estrenaron'} tvshow={true} movies={onAir} slides={5} />
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const res4 = await fetch(requests.fetchTVPopular);
  const data4 = await res4.json();
  const tv = data4.results;

  const res = await fetch(requests.topRated);
  const data = await res.json();
  const topRat = data.results;

  const res3 = await fetch(requests.airingToday);
  const data3 = await res3.json();
  const today = data3.results;

  const res5 = await fetch(requests.onAir);
  const data5 = await res5.json();
  const air = data5.results;

  return {
    props: {
      tvPopular: tv,
      topRated: topRat,
      airingToday: today,
      onAir: air,
    },
  };
}

export default Series;
