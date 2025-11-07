import React from 'react'
import { Helmet } from 'react-helmet'
import PersonalizedReportsSection from '../../components/reports/personalized/PersonalizedReportsSection'

const PersonalizedReportsPage = () => {
  return (
    <>
      <Helmet>
        <title>Free Personalized Astrology Reports | Daily, Weekly, Yearly</title>
        <meta name="description" content="Get FREE personalized Daily, Weekly, Monthly & Yearly horoscope reports. Love, Career, Health, Finance – all in one place!" />
        <meta property="og:title" content="Free Personalized Reports - Kundali Expert" />
        <meta property="og:image" content="https://yoursite.com/images/sec_icon.png" />
        <meta property="og:url" content="https://yoursite.com/personalized-reports" />
        <link rel="canonical" href="https://yoursite.com/personalized-reports" />
      </Helmet>

      <PersonalizedReportsSection />
    </>
  )
}

export default PersonalizedReportsPage