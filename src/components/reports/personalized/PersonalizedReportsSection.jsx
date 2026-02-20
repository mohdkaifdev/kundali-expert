import React from 'react'
import ReportCard from './ReportCard'
// import personalizedReports from '../../../data/personalizedReports'
import Dailyreport from '../../../assets/images/transit/dailyreport.svg';
import Weeklyreport from '../../../assets/images/transit/weeklyreport.svg';
import Monthlyreport from '../../../assets/images/transit/monthlyreport.svg';
import Suntransit from '../../../assets/images/transit/suntransit.svg';
import Jupitertransit from '../../../assets/images/transit/jupitertransit.svg';
import Mars from '../../../assets/images/transit/mars.svg';
import Venus from '../../../assets/images/transit/venus.svg';
import Rahuketu from '../../../assets/images/transit/rahuketu.svg';
import Saturn from '../../../assets/images/transit/saturn.svg';
import Mercury from '../../../assets/images/transit/mercury.svg';



const PersonalizedReportsSection = () => {

 const personalizedReports = [
  { id: 1, title: "Daily Report", link: "/horoscope/daily", img: Dailyreport ,free: true },
  { id: 2, title: "Weekly Report", link: "/horoscope/weekly", img: Weeklyreport ,free: true },
  { id: 3, title: "Monthly Report", link: "/horoscope/monthly", img: Monthlyreport,free: true },
  { id: 4, title: "Sun Transit", link: "/horoscope/yearly", img: Suntransit ,free: false},
  { id: 5, title: "Jupiter Transit", link: "/horoscope/love", img: Jupitertransit ,free: false},
  { id: 6, title: "Mars Transit", link: "/horoscope/career", img: Mars ,free: false},
  { id: 7, title: "Venus Transit", link: "/horoscope/health", img: Venus ,free: false},
  { id: 8, title: "Rahu-Ketu Transit", link: "/horoscope/finance", img: Rahuketu ,free: false},
  { id: 9, title: "Saturn Transit", link: "/horoscope/education", img: Saturn ,free: false},
  { id: 10, title: "Mercury Transit", link: "/horoscope/property", img: Mercury ,free: false}
];

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
                iconlink={report?.img}
                free={report?.free}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PersonalizedReportsSection