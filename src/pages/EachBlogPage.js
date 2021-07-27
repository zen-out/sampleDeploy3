import React from "react";
import { blogs } from "../dummyData/blogs";
export default function EachBlogPage(props) {
  console.log("each blog page", props);
  return (
    <div className="container">
      <h1>{blogs[props.match.params.id - 1].title}</h1>
      {blogs[props.match.params.id - 1].post}
    </div>
  );
}
