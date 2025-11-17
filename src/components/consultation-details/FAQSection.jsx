import React from 'react'
import consultationDetail from "../../data/consultationDetails";

const FAQSection = () => {
  const { faqs } = consultationDetail

  return (
    <div className="cd_tab_content">
      <div className="faq_block">
        <div className="accordion" id="accordionExample">
          {faqs.map((faq, index) => (
            <div className="accordion-item" key={faq.id}>
              <h2 className="accordion-header" id={`heading${faq.id}`}>
                <button
                  className={`accordion-button ${index === 0 ? '' : 'collapsed'}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${faq.id}`}
                  aria-expanded={index === 0}
                  aria-controls={`collapse${faq.id}`}
                >
                  {faq.question}
                </button>
              </h2>
              <div
                id={`collapse${faq.id}`}
                className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                aria-labelledby={`heading${faq.id}`}
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="banner_btn">
        <a href="#" className="site_btn">CONSULT NOW</a>
      </div>
    </div>
  )
}

export default FAQSection