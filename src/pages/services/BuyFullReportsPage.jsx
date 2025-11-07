import React from 'react'
import { Helmet } from "react-helmet";
import FullReportsSection from '../../components/reports/FullReportsSection';

const BuyFullReportsPage = () => {
  return (
    <>
      <Helmet>
        <title>Buy Full Astrology Reports Online | Kundali Expert</title>
        <meta name="description" content="Get detailed Financial, Career, Medical, Sade Sati, Yearly & Full Kundali Reports. Instant PDF delivery. Trusted by 50,000+ users." />
        <meta property="og:title" content="Buy Full Reports - Financial, Career, Health & More" />
        <meta property="og:image" content="https://yoursite.com/images/sec_icon.png" />
        <meta property="og:url" content="https://yoursite.com/buy-full-reports" />
        <link rel="canonical" href="https://yoursite.com/buy-full-reports" />
      </Helmet>

      <FullReportsSection />
    </>
  )
}

export default BuyFullReportsPage