import react from "react";
import { Link } from "react-router-dom";
import payIcon from "../../assets/images/pay_icon.png";
const ConsultationCard = ({item}) => {
    const {id, blockClass, title, price, offer, link} = item;
    return(
        <>
        <div className={`consultation_list_block ${blockClass}`}>
            <div className="offer_box d-inline-flex align-items-center">
                <span className="badge bg-success">{offer}</span>
                <b>Avail Offer</b>
                <div className="block"></div>
            </div>
            <h4><Link to={`/consultation-detail/${id}`} className="white_clr">{title}</Link></h4>
            <p>(For Customized Horoscope Go to Personalized Report section)</p>
            <h5><span>@{price}</span> + GST Only<br/> Consultaion Fee Is Valid 1 Year</h5>
            <div className="ao_sec d-flex align-items-center">
                <a href="#" className="site_btn">AVAIL OFFER</a>
                <a href="#"><img src={payIcon} alt="icon" className="img-fluid" /></a>
            </div>
        </div>
        </>
    );
}
export default ConsultationCard;