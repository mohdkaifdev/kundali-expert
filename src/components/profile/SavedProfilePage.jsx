import React, { useEffect, useState } from "react";
import SavedProfilePageCard from "./SavedProfilePageCard";
import api from "../../services/api";
import { Link } from "react-router-dom";
const SavedProfilePage = () => {

    const[subusers,setsubusers]=useState();

    const getusers = async()=>{
        const res = await api.get('/v1/user/getMySubUsers?subUsername=');
       // console.log(res?.data?.data);
        setsubusers(res?.data?.data)
    }
    useEffect(()=>{
        getusers();
    },[]);
    return(
        <>
            <section>
                <div className="course_detail_section learn_section banner_space light_bg">
                    <div className="container">
                        <div className="banner_heading d-flex align-items-center justify-content-between mb-4 pb-lg-3">
                            <h2>Get Started With Astrology</h2>
                        </div>
                        <div className="learn_main_block">
                            <div className="dropdown">
                                <div className="apply-section mt-3">
                                    <input type="text" placeholder="Search by name..." className="p-3"/>
                                    <Link to="/profile/create-user" className="site_btn p-3 px-5">Create Sub User</Link>
                                </div>
                                <ul className="dropdown-menu border-0 position-relative" data-popper-placement="bottom-end">
                                    <SavedProfilePageCard data={subusers} refresh={getusers} />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default SavedProfilePage;