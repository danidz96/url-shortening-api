import Head from 'next/head';
import Nav from 'components/Nav/Nav';
import Header from 'components/Header/Header';
import Shortener from 'components/Shortener/Shortener';
import FeaturesSection from 'components/FeaturesSection/FeaturesSection';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../tailwind.config';

const { theme } = resolveConfig(tailwindConfig);

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
      <Header />
      <div
        style={{
          background: `linear-gradient(180deg, white 5.5rem, ${theme.colors.gray.light} 5.5rem, ${theme.colors.gray.light} 100%)`,
        }}
        className="pb-36"
      >
        <Shortener />
        <FeaturesSection />
      </div>
    </div>
  );
}
