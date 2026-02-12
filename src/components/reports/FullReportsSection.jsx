import React from 'react'
import ReportCard from './ReportCard'
import fullReports from '../../data/fullReports'
import { useLocation } from "react-router-dom";

const FullReportsSection = () => {
  const { state } = useLocation();

const kundaliData = state?.kundaliData;

console.log(kundaliData);
  return (
    <section>
      <div className="consultation_list_section space_sec b_space_top">
        <div className="container">
          <div className="heading_sec">
            <h3 className="mrn_clr mb-0">Buy Full Reports</h3>
          </div>

          <div className="banner_block d-flex flex-wrap align-items-center pt-0">
            {fullReports.map((report) => (
              <ReportCard
                key={report.id}
                title={report.title}
                link={report.link}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FullReportsSection