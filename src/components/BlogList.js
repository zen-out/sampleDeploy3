import React from "react";
import { Link } from "react-router-dom";

/**********************************************
 * Blog List Component
 * ==================================
 * This component accepts an array of objects, rendering out each object (including the navbar react link)
 * We gave it a function, and then rendered it inside the return block
 ***********************************************/
function BlogList(props) {
  function renderBlogs() {
    return props.blogs.map((blog, index) => {
      return (
        <li key={blog.id}>
          <br />
          <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
        </li>
      );
    });
  }
  return (
    <div>
      <h3>blog List</h3>
      {renderBlogs()}
    </div>
  );
}

export default BlogList;
