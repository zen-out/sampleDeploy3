import React, { useEffect } from "react";
import { projects } from "../dummyData/projects";
export default function EachProjectPage(props) {
  return (
    <div>
      <h1>
        Current id: {props.match.params.id - 1}
        <br />
        {projects[props.match.params.id - 1].title}
      </h1>{" "}
      <p>
        {projects[props.match.params.id - 1].description}
      </p>
    </div>
  );
}
