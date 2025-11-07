import React from 'react';
import { Helmet } from 'react-helmet';
import BannerSection from '../components/home/BannerSection';
import KundaliDetails from '../components/home/KundaliDetails';
import HoroscopeSection from '../components/home/HoroscopeSection';
import BlogInsights from '../components/home/BlogInsights';
import AstroDetails from '../components/home/AstroDetails';
import LearnAstrology from '../components/home/LearnAstrology';
import Astrologers from '../components/home/Astrologers';
import Gemstones from '../components/home/Gemstones';
import Publication from '../components/home/Publication';
import PujaSection from '../components/home/PujaSection';
import HomeMidBanner from '../components/home/HomeMidBanner';
const Home = () => {
  return (
    <>
      <Helmet>
        <title>Kundali Expert</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/x-icon" href="/images/favicon.png" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Sora:wght@100..800&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
        {/* Add all other links from original head */}
      </Helmet>
      <BannerSection />
      <KundaliDetails />
      <HomeMidBanner />
      <HoroscopeSection />
      <BlogInsights />
      <AstroDetails />
      <LearnAstrology />
      <Astrologers />
      <Gemstones />
      <Publication />
      <PujaSection />
    </>
  );
};

export default Home;