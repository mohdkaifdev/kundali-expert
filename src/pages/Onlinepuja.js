import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

function Onlinepuja() {
    const pujaList = [
  {
    id: 1,
    name: "Rahu Shanti Puja",
    desc: "Performed to reduce the negative effects of Rahu and bring stability.",
    img: "/images/rahu.svg",
  },
  {
    id: 2,
    name: "Ketu Shanti Puja",
    desc: "Helps nullify the malefic impact of Ketu and improves spiritual balance.",
    img: "/images/ketu.svg",
  },
  {
    id: 3,
    name: "Shani Shanti Path",
    desc: "Performed to reduce hardships caused by Shani and bring discipline.",
    img: "/images/shanti.svg",
  },
  {
    id: 4,
    name: "Mangal Shanti Path",
    desc: "Removes Mangal dosh and supports harmony in relationships.",
    img: "/images/mangal.svg",
  },
  {
    id: 5,
    name: "Nav-Grah Shanti Puja",
    desc: "Balances the influence of all nine planets for overall well-being.",
    img: "/images/navgrah.svg",
  },
  {
    id: 6,
    name: "Pitra Dosh Puja",
    desc: "Performed to seek blessings of ancestors and remove ancestral obstacles.",
    img: "/images/pitradosh.svg",
  },
  {
    id: 7,
    name: "Nadi Dosh Puja",
    desc: "A remedy for Nadi dosh to ensure marital harmony and good health.",
    img: "/images/nadi.svg",
  },
  {
    id: 8,
    name: "Bhakut Dosh Puja",
    desc: "Conducted to eliminate Bhakut dosh for a peaceful married life.",
    img: "/images/bhakut.svg",
  },
  {
    id: 9,
    name: "Kaalsarp Dosh Puja",
    desc: "Removes Kaalsarp dosh and reduces continuous struggles in life.",
    img: "/images/kalsarap.svg",
  },
  {
    id: 10,
    name: "Maha Mrityunjay Path",
    desc: "A powerful path for health, longevity, and protection.",
    img: "/images/mahamritunjay.svg",
  },
  {
    id: 11,
    name: "Baglamukhi Puja",
    desc: "Performed for victory over enemies and removal of obstacles.",
    img: "/images/baglamukhi.svg",
  },
  {
    id: 12,
    name: "Rudrabhishek Puja",
    desc: "A sacred puja to please Lord Shiva and attain peace and prosperity.",
    img: "/images/rudrbhishek.svg",
  },
  {
    id: 13,
    name: "Sundarkand Path Puja",
    desc: "Recital of Sundarkand for courage, devotion, and positive energy.",
    img: "/images/sunderkand.svg",
  },
  {
    id: 14,
    name: "Karna Pishachini Puja",
    desc: "A powerful tantric puja for wisdom, intuition, and success.",
    img: "/images/karanpisachni.svg",
  },
  {
    id: 15,
    name: "Chhinnmastika Puja",
    desc: "Performed for strength, fearlessness, and spiritual awakening.",
    img: "/images/chinnmastika.svg",
  },
];

  return (
    <>
    <Helmet>
        <title>Onlinepuja</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/x-icon" href="/images/favicon.png" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Sora:wght@100..800&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
        {/* Add all other links from original head */}
      </Helmet>
    <section className='pt-5'>
         <div className="puja_section space_sec">
           <div className="container">
             <div className="heading_sec text-center">
               <h2 className="purple_clr">Online Puja</h2>
               <h5 className="gray_clr">
                 (For Customized Horoscope Go to Personalized Report section)
               </h5>
             </div>
   
             <div className="banner_block pt-0 d-flex flex-wrap align-items-center">
               {/* Column 1 */}
               {
                 pujaList?.map((item,index)=>{
                   return(
                      <div className="banner_col" key={index}>
                       <Link to={`/puja/${item?.id}`}>
                 <div className="banner_box">
                   <span>
                     <img
                       src={item?.img}
                       alt="icon"
                       className="img-fluid sec_icon"
                     />
                   </span>
                   <div className="banner_box_inner">
                     <h5>
                       {item?.name}{" "}
                       <span className="d-block pe-md-4">
                         {item?.desc}
                       </span>
                     </h5>
                   </div>
                 </div>
                 </Link>
               </div>
                   )
                 })
               }
              
   
             </div>
           </div>
         </div>
       </section>
    </>
  )
}

export default Onlinepuja