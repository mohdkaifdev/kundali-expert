import React from 'react'

const FAQSection = (prop) => {
  const data = prop?.data;

console.log(data);
  return (
    <div className="cd_tab_content">
      <div className="faq_block">
        <div className="accordion" id="accordionExample">
          {data.map((faq, index) => (
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
                  {faq.questions}
                </button>
              </h2>
              <div
                id={`collapse${faq.id}`}
                className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                aria-labelledby={`heading${faq.id}`}
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>{faq.answers}</p>
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