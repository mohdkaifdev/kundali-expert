import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import CourseBanner from "../components/course-detail/CourseBanner";
import VideoPlayer from "../components/course-detail/VideoPlayer";
import CommentSection from "../components/course-detail/CommentSection";
import VideoList from "../components/course-detail/VideoList";

import { course, comments, videoList } from "../data/courseData";
import biImg1 from "../assets/images/bi_img1.png";
import api from "../services/api";
import { loadUserFromStorage } from "../features/user/userSlice";

const CourseDetailPage = () => {
  const [details, setDetails] = useState(null);
  const [showVideo, setShowVideo] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState("");

  const { id } = useParams();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    dispatch(loadUserFromStorage());
  }, [dispatch]);

  const playVideo = (url) => {
    if (!url) return;
    setCurrentVideoUrl(url);
    setShowVideo(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const closeVideo = () => {
    setShowVideo(false);
    setCurrentVideoUrl("");
  };

  useEffect(() => {
    if (showVideo) {
      document.querySelector(".course_detail_section").style.display = "none";
      document.querySelector(".videoframe").style.display = "block";
    } else {
      document.querySelector(".course_detail_section").style.display = "block";
      document.querySelector(".videoframe").style.display = "none";
    }
  }, [showVideo]);

  const getDetail = async () => {
    if (!user?.language?.languageId) return;

    const res = await api.get(
      `/v1/course/findCourseByCourseLevel?courselevelId=${id}&languageId=${user.language.languageId}`
    );

    console.log(res?.data?.data?.[0]);
    setDetails(res?.data?.data?.[0]);
  };

  useEffect(() => {
    getDetail();
  }, [user]);

  return (
    <>
      <Helmet>
        <title>{details?.courseTitle || "Course Detail"}</title>
      </Helmet>

      <CourseBanner
        data={details}
        course={course}
        onPlayVideo={playVideo}
      />

      <section>
        <div
          className="c_details_section space_sec videoframe"
          style={{ display: "none" }}
        >
          <div className="container">
            {showVideo && (
              <VideoPlayer
                videoUrl={currentVideoUrl}
                onClose={closeVideo}
              />
            )}

            <div className="heading_sec mb-4">
              <h3 className="mrn_clr mb-0">Views</h3>
            </div>

            <div className="review_box border-0 flex-wrap p-0">
              <div className="review_box_inner d-flex align-items-center">
                <span>
                  <img src={biImg1} alt="img" className="img-fluid w-100" />
                </span>
                <div className="review_box_name ms-md-4 ms-2">
                  <h5 className="mrn_clr mb-0">Prateek</h5>
                </div>
              </div>
            </div>

            <CommentSection comments={comments} />
          </div>
        </div>
      </section>

      <VideoList videos={videoList} onPlayVideo={playVideo} />
    </>
  );
};

export default CourseDetailPage;
