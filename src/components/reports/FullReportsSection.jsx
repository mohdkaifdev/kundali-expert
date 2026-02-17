import React from 'react'
import ReportCard from './ReportCard'
import financialIcon from "../../assets/images/reportfull/financial.svg";
import careerIcon from "../../assets/images/reportfull/career.svg";
import medicalIcon from "../../assets/images/reportfull/medical.svg";
import sadesatiIcon from "../../assets/images/reportfull/sadesati.svg";
import yearlyIcon from "../../assets/images/reportfull/yearly.svg";
import ashtakvargaIcon from "../../assets/images/reportfull/ashtakavarga.svg";
import vargaIcon from "../../assets/images/reportfull/varga.svg";
import fullIcon from "../../assets/images/reportfull/fullreport.svg";


const FullReportsSection = () => {
 // src/data/fullReports.js
const fullReports = [
  { id: 1, title: "Financial Report", link: "/financial", icon: financialIcon },
  { id: 2, title: "Career Report", link: "/career", icon: careerIcon },
  { id: 3, title: "Medical Report", link: "/medical", icon: medicalIcon },
  { id: 4, title: "Sade Sati Report", link: "/sade-sati", icon: sadesatiIcon },
  { id: 5, title: "Yearly Report", link: "/yearly", icon: yearlyIcon },
  { id: 6, title: "Ashtakvarga Report", link: "/ashtakvarga", icon: ashtakvargaIcon },
  { id: 7, title: "Varga Kundali Report", link: "/varga-kundali", icon: vargaIcon },
  { id: 8, title: "Full Report", link: "/complete", icon: fullIcon }
];


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
                icon={report.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FullReportsSection