// src/components/course-detail/CommentSection.jsx
import React, { useState } from 'react'
import biImg1 from "../../assets/images/bi_img1.png";

const CommentSection = ({ comments: initialComments }) => {
  const [comments, setComments] = useState(initialComments)
  const [newComment, setNewComment] = useState('')

  const handleLike = (id) => {
    setComments(prev => prev.map(c => c.id === id ? { ...c, likes: c.likes + 1 } : c))
  }

  const handleDislike = (id) => {
    setComments(prev => prev.map(c => c.id === id ? { ...c, dislikes: c.dislikes + 1 } : c))
  }

  const handleSend = () => {
    if (newComment.trim()) {
      setComments(prev => [{
        id: Date.now(),
        name: "You",
        time: "Just now",
        text: newComment,
        likes: 0,
        dislikes: 0
      }, ...prev])
      setNewComment('')
    }
  }

  return (
    <div className="learn_main_block mt-5">
      <div className="dropdown">
        <button class="btn btn-secondary gray_clr dropdown-toggle px-0 position-relative bg-transparent border-0 show" type="button" data-bs-toggle="dropdown" aria-expanded="true">
            <h4 class="gray_clr">Comments(30)</h4>
        </button>
        <div class="apply-section mt-3">
            <input type="text" placeholder="Write a comment"/>
            <button class="site_btn px-4">Send</button>
        </div>
        <ul className="dropdown-menu border-0 position-relative" data-popper-placement="bottom-end">
                <div className="review_box mt-0">
                    <div className="d-flex align-items-center justify-content-between flex-wrap">
                        <div className="review_box_inner d-flex align-items-center">
                            <span><img src={biImg1} alt="img" className="img-fluid w-100"/></span>
                            <div className="review_box_name ms-md-4 ms-2">
                                <h5 className="mrn_clr">Prateek</h5>
                                <p className="gray_clr">23 hours ago</p>
                            </div>
                        </div>
                        <div className="dots_review d-flex align-items-center justify-content-between gap-4">
                            <div className="like_buttons">
                                <i className="fa-solid fa-thumbs-up"></i>
                                <span>0</span>
                            </div>
                            <div className="like_buttons">
                                <i className="fa-solid fa-thumbs-down"></i>
                                <span>0</span>
                            </div>
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle p-0 bg-transparent border-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fa-solid fa-ellipsis-vertical"></i>
                                </button>
                                <ul className="dropdown-menu" data-popper-placement="bottom-end">
                                    <li><a className="dropdown-item" href="#">Reply</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="review_cont w-100 mt-4">
                            <p className="gray_clr">Good session</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between flex-wrap">
                        <div className="review_box_inner d-flex align-items-center">
                            <span><img src={biImg1} alt="img" className="img-fluid w-100"/></span>
                            <div className="review_box_name ms-md-4 ms-2">
                                <h5 className="mrn_clr">Prateek</h5>
                                <p className="gray_clr">23 hours ago</p>
                            </div>
                        </div>
                        <div className="dots_review d-flex align-items-center justify-content-between gap-4">
                            <div className="like_buttons">
                                <i className="fa-solid fa-thumbs-up"></i>
                                <span>0</span>
                            </div>
                            <div className="like_buttons">
                                <i className="fa-solid fa-thumbs-down"></i>
                                <span>0</span>
                            </div>
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle p-0 bg-transparent border-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fa-solid fa-ellipsis-vertical"></i>
                                </button>
                                <ul className="dropdown-menu" data-popper-placement="bottom-end">
                                    <li><a className="dropdown-item" href="#">Reply</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="review_cont w-100 mt-4">
                            <p className="gray_clr">Good session</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between flex-wrap">
                        <div className="review_box_inner d-flex align-items-center">
                            <span><img src={biImg1} alt="img" className="img-fluid w-100"/></span>
                            <div className="review_box_name ms-md-4 ms-2">
                                <h5 className="mrn_clr">Prateek</h5>
                                <p className="gray_clr">23 hours ago</p>
                            </div>
                        </div>
                        <div className="dots_review d-flex align-items-center justify-content-between gap-4">
                            <div className="like_buttons">
                                <i className="fa-solid fa-thumbs-up"></i>
                                <span>0</span>
                            </div>
                            <div className="like_buttons">
                                <i className="fa-solid fa-thumbs-down"></i>
                                <span>0</span>
                            </div>
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle p-0 bg-transparent border-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fa-solid fa-ellipsis-vertical"></i>
                                </button>
                                <ul className="dropdown-menu" data-popper-placement="bottom-end">
                                    <li><a className="dropdown-item" href="#">Reply</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="review_cont w-100 mt-4">
                            <p className="gray_clr">Good session</p>
                        </div>
                    </div>
                </div>
            </ul>
      </div>
    </div>
  )
}

export default CommentSection