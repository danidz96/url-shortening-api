import Head from 'next/head';
import Nav from 'components/Nav/Nav';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Url Shortening App</title>
        <link rel="icon" href="/favicon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Nav />
    </div>
  );
}
