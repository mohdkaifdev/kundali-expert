import react from "react";
import ConsultationCard from "./ConsultationCard";
const ConsultationSection = () => {

const consultationData = [
  {
    id: 1,
    blockClass: "consultation_list_block1",
    title: "Get 1-2 Questions Kundali Prediction",
    price: "INR 6018",
    offer: null,
    link: "/consultation/1"
  },
  {
    id: 2,
    blockClass: "consultation_list_block2",
    title: "Get Your Full Analysis Through Video Or Telephonic Consultation",
    price: "INR 10600",
    offer: null,
    link: "/consultation/2"
  },
  {
    id: 3,
    blockClass: "consultation_list_block3",
    title: "Predict Through Advance Analysis/Personal Consultation",
    price: "INR 21000",
    offer: null,
    link: "/consultation/3"
  }
]


    return(
        <>
            <section>
                <div className="consultation_list_section space_sec b_space_top">
                    <div className="container">
                        <div className="heading_sec">
                            <h3 className="mrn_clr">Consultation</h3>
                            <p className="gray_clr">(For Customized Horoscope Go to Personalized Report section)</p>
                        </div>
                        <div className="row">

                        {consultationData.map((item)=>(
                            <div className="col-lg-4 col-md-6" key={item.id}>
                                <ConsultationCard item={item}/>
                            </div>
                        ))}
                        
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default ConsultationSection;