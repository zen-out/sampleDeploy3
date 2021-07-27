import React, { useState } from "react";
import { resumes } from "../dummyData/resumes";
import Accordion from "../components/Accordion";

function ResumePage() {
  const job = resumes.filter(
    (resume) => resume.type === "Job"
  );
  const education = resumes.filter(
    (resume) => resume.type === "Education"
  );
  const certification = resumes.filter(
    (resume) => resume.type === "Certification"
  );
  return (
    <div>
      <h1>Resume Page</h1>
      <hr />
      <h1>Jobs</h1>
      <Accordion resumes={job} />
      <hr />
      <h1>Education</h1>
      <Accordion resumes={education} />
      <hr />
      <h1>Certification</h1>
      <Accordion resumes={certification} />
    </div>
  );
}

export default ResumePage;
