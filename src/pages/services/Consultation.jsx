import react from "react";
import { Helmet } from "react-helmet";
import ConsultationSection from "../../components/consultation/ConsultationSection";
const Consultation = () => {
    return(
        <>
            <Helmet>
                <title>Best Online Astrology Consultation in India | 20% OFF</title>
                <meta name="description" content="Get instant answers from expert astrologers. 1-2 questions, full kundali analysis, or yearly prediction. 20% OFF + 1 Year Validity!" />
                <meta property="og:title" content="Astrology Consultation - 20% OFF | Kundali Expert" />
                <meta property="og:image" content="https://yoursite.com/images/pay_icon.png" />
                <meta property="og:url" content="https://yoursite.com/consultation" />
                <link rel="canonical" href="https://yoursite.com/consultation" />
            </Helmet>
            <ConsultationSection/>
        </>
    );
}
export default Consultation;