import React from 'react';
import './Blog.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookBookmark, faBookmark } from '@fortawesome/free-solid-svg-icons';


const Blog = (props) => {
    // console.log(props.blog)
    const { bannerImg, name, profileImg, publishDate, time, title } = props.blog
    const addToCartHandler = props.addToCartHandler
    const readTimeAdd = props.readTimeAdd

    return (
        <div className='blog'>
            <img src={bannerImg} alt="" />

            <div className="blog-info">
                <div className="profile">
                    <div className="profile-details">
                        <img src={profileImg} alt="" />
                        <h4>{name} <span>{publishDate}</span></h4>
                    </div>

                    <div className="time">
                        <p>{time} min read  <a
                            onClick={() => addToCartHandler(props.blog)}
                        ><FontAwesomeIcon icon={faBookmark}></FontAwesomeIcon></a>
                        </p>
                    </div>

                </div>

                <h2>{title}</h2>
                <small>#beginers #programming</small> <br />

                <a onClick={() => readTimeAdd(props.blog)}>
                    Mark as read
                </a>
            </div>


        </div>
    );
};

export default Blog;