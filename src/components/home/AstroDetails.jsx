import React from "react";

export default function AstroDetails() {
  return (
    <section>
      <div className="astro_section space_sec">
        <div className="container">
          <div className="heading_sec text-center">
            <h2 className="mb-2">Astro Details</h2>
            <h5>(For Customized Horoscope Go to Personalized Report section)</h5>
          </div>

          <div className="astro_tabs_sec">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="home-tab-pane"
                  aria-selected="true"
                >
                  Transit Of Planet
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profile-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="profile-tab-pane"
                  aria-selected="false"
                >
                  Rashi Nakshatra
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#contact-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="contact-tab-pane"
                  aria-selected="false"
                >
                  Fasts And Festivals
                </button>
              </li>
            </ul>

            <div className="tab-content" id="myTabContent">
              {/* ---------- Tab 1 ---------- */}
              <div
                className="tab-pane fade show active"
                id="home-tab-pane"
                role="tabpanel"
                aria-labelledby="home-tab"
                tabIndex="0"
              >
                <div className="tabs_content">
                  <ul>
                    <li>
                      <p>Mars</p>
                      <p>
                        July 28, 2025 <span className="d-block">Mars Enters Virgo</span>
                      </p>
                    </li>
                    <li>
                      <p>Mars</p>
                      <p>
                        July 28, 2025 <span className="d-block">Mars Enters Virgo</span>
                      </p>
                    </li>
                    <li>
                      <p>Mars</p>
                      <p>
                        July 28, 2025 <span className="d-block">Mars Enters Virgo</span>
                      </p>
                    </li>
                    <li>
                      <p>Mars</p>
                      <p>
                        July 28, 2025 <span className="d-block">Mars Enters Virgo</span>
                      </p>
                    </li>
                    <li>
                      <p>Mars</p>
                      <p>
                        July 28, 2025 <span className="d-block">Mars Enters Virgo</span>
                      </p>
                    </li>
                    <li>
                      <p>Mars</p>
                      <p>
                        July 28, 2025 <span className="d-block">Mars Enters Virgo</span>
                      </p>
                    </li>
                    <li>
                      <p>Mars</p>
                      <p>
                        July 28, 2025 <span className="d-block">Mars Enters Virgo</span>
                      </p>
                    </li>
                    <li>
                      <p>Mars</p>
                      <p>
                        July 28, 2025 <span className="d-block">Mars Enters Virgo</span>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>

              {/* ---------- Tab 2 ---------- */}
              <div
                className="tab-pane fade"
                id="profile-tab-pane"
                role="tabpanel"
                aria-labelledby="profile-tab"
                tabIndex="0"
              >
                <div className="tabs_content">
                  <ul>
                    <li>
                      <p>Mars</p>
                      <p>
                        July 28, 2025 <span className="d-block">Mars Enters Virgo</span>
                      </p>
                    </li>
                    <li>
                      <p>Mars</p>
                      <p>
                        July 28, 2025 <span className="d-block">Mars Enters Virgo</span>
                      </p>
                    </li>
                    <li>
                      <p>Mars</p>
                      <p>
                        July 28, 2025 <span className="d-block">Mars Enters Virgo</span>
                      </p>
                    </li>
                    <li>
                      <p>Mars</p>
                      <p>
                        July 28, 2025 <span className="d-block">Mars Enters Virgo</span>
                      </p>
                    </li>
                    <li>
                      <p>Mars</p>
                      <p>
                        July 28, 2025 <span className="d-block">Mars Enters Virgo</span>
                      </p>
                    </li>
                    <li>
                      <p>Mars</p>
                      <p>
                        July 28, 2025 <span className="d-block">Mars Enters Virgo</span>
                      </p>
                    </li>
                    <li>
                      <p>Mars</p>
                      <p>
                        July 28, 2025 <span className="d-block">Mars Enters Virgo</span>
                      </p>
                    </li>
                    <li>
                      <p>Mars</p>
                      <p>
                        July 28, 2025 <span className="d-block">Mars Enters Virgo</span>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>

              {/* ---------- Tab 3 ---------- */}
              <div
                className="tab-pane fade"
                id="contact-tab-pane"
                role="tabpanel"
                aria-labelledby="contact-tab"
                tabIndex="0"
              >
                <div className="tabs_content">
                  <ul>
                    <li>
                      <p>Mars</p>
                      <p>
                        July 28, 2025 <span className="d-block">Mars Enters Virgo</span>
                      </p>
                    </li>
                    <li>
                      <p>Mars</p>
                      <p>
                        July 28, 2025 <span className="d-block">Mars Enters Virgo</span>
                      </p>
                    </li>
                    <li>
                      <p>Mars</p>
                      <p>
                        July 28, 2025 <span className="d-block">Mars Enters Virgo</span>
                      </p>
                    </li>
                    <li>
                      <p>Mars</p>
                      <p>
                        July 28, 2025 <span className="d-block">Mars Enters Virgo</span>
                      </p>
                    </li>
                    <li>
                      <p>Mars</p>
                      <p>
                        July 28, 2025 <span className="d-block">Mars Enters Virgo</span>
                      </p>
                    </li>
                    <li>
                      <p>Mars</p>
                      <p>
                        July 28, 2025 <span className="d-block">Mars Enters Virgo</span>
                      </p>
                    </li>
                    <li>
                      <p>Mars</p>
                      <p>
                        July 28, 2025 <span className="d-block">Mars Enters Virgo</span>
                      </p>
                    </li>
                    <li>
                      <p>Mars</p>
                      <p>
                        July 28, 2025 <span className="d-block">Mars Enters Virgo</span>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}