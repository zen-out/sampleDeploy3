import React, { useState } from "react";
import { projects } from "../dummyData/projects";
import ProjectList from "../components/ProjectList";

export default function ProjectsPage() {
  const [search, setSearch] = useState("");

  function searchOnChange(event) {
    setSearch(event.target.value);
  }
  const filteredProjects = (search) => {
    const lowerSearch = search.toLowerCase();
    return projects.filter((project) => {
      return (
        project.title.toLowerCase().indexOf(lowerSearch) >
          -1 ||
        project.description
          .toLowerCase()
          .indexOf(lowerSearch) > -1 ||
        project.url.toLowerCase().indexOf(lowerSearch) > -1
      );
    });
  };

  // given search, will filter out the projects
  return (
    <div>
      <h1>Projects Page</h1>
      <input
        type="text"
        value={search}
        placeholder="Search"
        onChange={searchOnChange}
      />
      <ProjectList projects={filteredProjects(search)} />
    </div>
  );
}
