import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";

/**********************************************
 * Project List Component
 * ==================================
 * This component accepts an array of objects, rendering out each object (including the navbar react link)
 * We gave it a function, and then rendered it inside the return block
 ***********************************************/
function ProjectList(props) {
  function renderProjects() {
    return props.projects.map((project, index) => {
      return (
        <div key={project.id}>
          <Link to={`/projects/${project.id}`}>
            <br />
            <ProjectCard
              title={project.title}
              description={project.description}
            />
          </Link>
        </div>
      );
    });
  }
  return <div>{renderProjects()}</div>;
}

export default ProjectList;
