import React, { useContext } from "react";

import { JobsContext } from "../../App";
import Card from "../card/card";
import DUMMY_DATA from "../../dummydata";
import "./jobs.css";

const Jobs = () => {
  const { jobsList } = useContext(JobsContext);
  return (
    <section id="jobs-section">
      <div style={{ textAlign: "center", padding: "2% 0" }}>
        <h2 id="matched-jobs">Matched Jobs</h2>
      </div>
      <div className="jobs">
        {jobsList.length === 0
          ? DUMMY_DATA.map((job, index) => (
              <Card
                key={index}
                jobTitle={job.jobTitle}
                company={job.company}
                logo={job.logo}
                location={job.location}
              />
            ))
          : jobsList.map((job, index) => (
              <Card
                key={index}
                jobTitle={job.jobTitle}
                company={job.company}
                logo={job.logo}
                location={job.location}
              />
            ))}
      </div>
    </section>
  );
};

export default Jobs;
