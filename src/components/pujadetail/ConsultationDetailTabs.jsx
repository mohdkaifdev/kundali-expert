import React from 'react'
import TabContent from '../pujadetail/TabContent';
import ReviewSection from '../pujadetail/ReviewSection'
import FAQSection from '../pujadetail/FAQSection'

const ConsultationDetailTabs = (prop) => {
 
const data=prop?.data;
console.log(data)
  const tabs = [
    { id: "home", label: "About", content: (
      <div dangerouslySetInnerHTML={{ __html: data.poojaInfo }} />
    ) },
    { id: "profile", label: "Benefits", content: (
      <div dangerouslySetInnerHTML={{ __html: data.benefits }} />
    ) },
    { id: "contact", label: "Process", content: (
      <div dangerouslySetInnerHTML={{ __html: data.process }} />
    ) },
    { id: "contact1", label: "Reviews", component: <ReviewSection data={data.overallReview} data2={data.reviews}/> },
    { id: "contact2", label: "FAQ’s", component: <FAQSection data={data.faqs} /> }
  ]

  return (
    <div className="cd_tabs">
      <ul className="nav nav-tabs border-0" id="myTab" role="tablist">
        {tabs.map((tab, index) => (
          <li className="nav-item" role="presentation" key={tab.id}>
            <button
              className={`nav-link ${index === 0 ? 'active' : ''}`}
              id={`${tab.id}-tab`}
              data-bs-toggle="tab"
              data-bs-target={`#${tab.id}-tab-pane`}
              type="button"
              role="tab"
              aria-controls={`${tab.id}-tab-pane`}
              aria-selected={index === 0}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>

      <div className="tab-content" id="myTabContent">
        {tabs.map((tab, index) => (
          <div
            key={tab.id}
            className={`tab-pane fade ${index === 0 ? 'show active' : ''}`}
            id={`${tab.id}-tab-pane`}
            role="tabpanel"
            aria-labelledby={`${tab.id}-tab`}
            tabIndex="0"
          >
            {tab.component ? tab.component : <TabContent content={tab.content} />}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ConsultationDetailTabs