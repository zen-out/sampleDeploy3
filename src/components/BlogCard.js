import React from "react";
import "../assets/BlogCard.scss";
import { Link } from "react-router-dom";
export default function BlogCard({
  id,
  image,
  date,
  title,
  post,
}) {
  let newPost = post.slice(0, 100) + "...";
  return (
    <div className="instructionsCard-container">
      <div v-for="i in items" className="instructionsCard">
        <div className="instructionsCard-top">
          <img
            src={image}
            width="32"
            height="32"
            alt="i.title"
          />
          <span>{title}</span>
        </div>
        <h2 className="instructionsCard-title">{date}</h2>
        <p className="instructionsCard-body">{newPost}</p>
        <div className="instructionsCard-action">
          <Link
            to={`/blogs/${id}`}
            type="button"
            className="btn btn-outline-dark waves-effect"
          >
            Learn more
          </Link>
          <i className="fas fa-arrow-right"></i>
        </div>
      </div>
    </div>
  );
}
