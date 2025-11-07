import React from 'react'
import reportDetail from '../../../data/fullReportDetails'
import ReportActionButtons from './ReportActionButtons'

const ReportDetailContent = () => {
  const { longDescription, sampleReportLink, viewReportLink, downloadReportLink } = reportDetail

  return (
    <section>
      <div className="cd_inner_section space_sec pt-0">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-8">
              <div className="cd_tabs bdr_right">
                <div className="cd_tab_content mt-0">
                  <div className="para_sec mw-100">
                    <p>{longDescription}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4">
              <ReportActionButtons
                sample={sampleReportLink}
                view={viewReportLink}
                download={downloadReportLink}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReportDetailContent