import React from 'react'
import ReportCard from './ReportCard'
import personalizedReports from '../../../data/personalizedReports'

const PersonalizedReportsSection = () => {
  return (
    <section>
      <div className="consultation_list_section space_sec b_space_top">
        <div className="container">
          <div className="heading_sec">
            <h3 className="mrn_clr mb-0">Personalized Reports</h3>
          </div>

          <div className="banner_block d-flex flex-wrap align-items-center pt-0">
            {personalizedReports.map((report) => (
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

export default PersonalizedReportsSection