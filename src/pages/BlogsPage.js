import React, { useState } from "react";
import { blogs } from "../dummyData/blogs";
import BlogCard from "../components/BlogCard";

function BlogsPage() {
  const [search, setSearch] = useState("");
  function searchOnChange(event) {
    setSearch(event.target.value);
  }
  const filteredBlogs = (search) => {
    const lowerSearch = search.toLowerCase();
    return blogs.filter((project) => {
      return (
        project.title.toLowerCase().indexOf(lowerSearch) >
          -1 ||
        project.post
          .join("")
          .toLowerCase()
          .indexOf(lowerSearch) > -1
      );
    });
  };

  function joinPost(post) {
    return post.join("");
  }

  const newBlogs = filteredBlogs(search);
  console.log("new blogs", newBlogs);
  return (
    <div className="container-fluid">
      <h1>Blogs Page</h1>
      <input
        type="text"
        value={search}
        placeholder="Search"
        onChange={searchOnChange}
      />
      {/* Render this out based on the specific item we pass in */}
      <br />
      <div className="d-inline-flex">
        {newBlogs.map((blog, index) => {
          return (
            <div className="container">
              <BlogCard
                key={blog.id}
                id={blog.id}
                date={blog.date}
                image={blog.image}
                title={blog.title}
                post={joinPost(blog.post)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BlogsPage;
