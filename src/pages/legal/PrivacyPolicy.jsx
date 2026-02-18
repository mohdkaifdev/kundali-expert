import { Helmet } from "react-helmet";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy and Policy | Kundali Expert</title>
        <meta
          name="description"
          content={"Privacy and Policy | Kundali Expert"}
        />
      </Helmet>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="privacy-policy-container pt-5 pb-2">
              <div className="text-center">
                <h1>Privacy Policy</h1>
                {/* <p>Last updated: February 2026</p> */}
              </div>
              <section>
                <div className="rdsPonit">
                  <p>
                    At KM ASTROGURU PRIVATE LIMITED, we respect your privacy and
                    are committed to protecting your personal information. This
                    Privacy Policy outlines the types of information we collect,
                    how we use it, and your rights regarding your data. By using
                    our services, you agree to the terms outlined in this
                    policy.
                  </p>
                </div>
              </section>
              <section>
                <h2>Information We Collect</h2>
                <div className="rdsPonit">
                  <h6 class="pt-4">
                    We collect the following types of information from you:
                  </h6>
                  <p>
                    Personal Information: This may include your name, contact
                    details, birthdate, birth time, birth location, and other
                    information you provide for astrological consultations.
                  </p>
                  <p>
                    Usage Data: Information about how you interact with our
                    website, including IP addresses, browser type, and device
                    information.
                  </p>
                </div>
              </section>
              <section>
                <h2>How We Use Your Information</h2>
                <div className="rdsPonit">
                  <h6 class="pt-4">
                    We use your personal information for the following purposes:
                  </h6>
                  <p>
                    1. To provide astrological consultations and other services
                  </p>
                  <p>
                    2. To communicate with you about your appointments or
                    consultations
                  </p>
                  <p>3. To improve our services and user experience</p>
                  <p>4. To comply with legal obligations</p>
                </div>
              </section>
              <section>
                <h2>Sharing of Information</h2>
                <div className="rdsPonit">
                  <h6 class="pt-4">
                    We do not sell or share your personal information with third
                    parties, except in the following cases:
                  </h6>
                  <p>1. With your consent.</p>
                  <p>
                    2. To comply with legal requirements or government requests.
                  </p>
                  <p>
                    3. To protect our rights or those of our customers and
                    stakeholders.
                  </p>
                </div>
              </section>
              <section>
                <h2>Your Rights</h2>
                <div className="rdsPonit">
                  <h6 class="pt-4">
                    You have the following rights regarding your personal
                    information:
                  </h6>
                  <p>1. Access to your personal information.</p>
                  <p>
                    2. Request correction or deletion of your personal
                    information.
                  </p>
                  <p>3. Withdraw consent for data processing.</p>
                  <p>
                    4. Lodge a complaint with data protection authorities if you
                    believe your rights have been violated.
                  </p>
                </div>
              </section>
              <section>
                <h2>Data Security</h2>
                <div className="rdsPonit">
                  <p>
                    We take appropriate measures to protect your personal
                    information from unauthorized access, loss, or misuse.
                    However, no data transmission over the Internet can be
                    guaranteed to be 100% secure.
                  </p>
                </div>
              </section>
              <section>
                <h2 class="text-center">Contact Us</h2>
                <div className="rdsPonit">
                  <h2 class="text-center">KM ASTROGURU PRIVATE LIMITED</h2>
                  <p class="text-center">
                    Registered Address: B1-101, Block-E, Classic Residency
                    Apartment, Raj Nagar Extension, Ghaziabad, Uttar Pradesh -
                    201017
                  </p>
                  <p class="text-center">
                    <span>
                      <strong style={{ color: "rgb(174, 40, 93)" }}>
                        Helpline Number:
                      </strong>
                    </span>{" "}
                    098183 18303
                  </p>
                  <p class="text-center">
                    <strong style={{ color: "rgb(174, 40, 93)" }}>
                      Email:
                    </strong>{" "}
                    <a href="mailto:info@kundaliexpert.com">
                      <u>info@kundaliexpert.com</u>
                    </a>
                  </p>
                  <p class="text-center">
                    <strong style={{ color: "rgb(174, 40, 93)" }}>
                      GST Number
                    </strong>{" "}
                    09AAHCK7900K1Z7
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PrivacyPolicy;
