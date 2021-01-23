import React, { useState, useContext } from "react";

import { JobsContext } from "../../App";
import { search } from "../../searchJobs";
import Interview from "../../assets/interview.svg";
import "./home.css";

const Home = () => {
  const { updateJobs } = useContext(JobsContext);
  // const [jobs, setJobs] = useState([]);
  const [title, setTitle] = useState("");
  const printJobs = () => {
    let tempJobs = search(title);
    // setJobs(tempJobs);
    // console.log(tempJobs); // This is not printing empty array
    // console.log(jobs); // This is printing empty array
    // setTimeout(() => console.log(jobs), 1000);
    updateJobs(tempJobs);
  };

  return (
    <section id="home">
      <div id="headings">
        <h1>
          Get Hired <span style={{ color: "darkyellow" }}>10X</span> Faster
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </h1>

        <div id="search-bar-container">
          <div className="search-bar">
            <input
              type="text"
              className="search-bar-input"
              onChange={(e) => setTitle(e.target.value)}
              placeholder="enter job title"
              aria-label="search"
            />
            <button
              className="search-bar-submit"
              aria-label="submit search"
              onClick={printJobs}
              id="search-btn"
            >
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
      </div>
      <div id="illustration">
        <img src={Interview} alt="" />
      </div>
    </section>
  );
};

export default Home;
