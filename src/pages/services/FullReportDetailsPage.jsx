import React from 'react'
import { Helmet } from 'react-helmet';
import ReportDetailBanner from '../../components/reports/report-details/ReportDetailBanner';
import ReportDetailContent from '../../components/reports/report-details/ReportDetailContent';
import reportDetail from '../../data/fullReportDetails';

const FullReportDetailsPage = () => {
  const { title } = reportDetail

  return (
    <>
      <Helmet>
        <title>{title} - Detailed Medical Astrology Report | Kundali Expert</title>
        <meta name="description" content="Get 2100+ health predictions with dasha analysis. Know diseases, timing & remedies. Instant PDF download." />
        <meta property="og:title" content={`${title} - 20% OFF`} />
        <meta property="og:image" content="https://yoursite.com/images/cd_img.png" />
        <meta property="og:url" content="https://yoursite.com/full-reports/medical" />
        <link rel="canonical" href="https://yoursite.com/full-reports/medical" />
      </Helmet>

      <ReportDetailBanner />
      <ReportDetailContent />
    </>
  )
}

export default FullReportDetailsPage