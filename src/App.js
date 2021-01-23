import React, { useState } from "react";

import Header from "./components/header/header";
import Home from "./components/home/home";
import Jobs from "./components/jobs/jobs";
import Footer from "./components/footer/footer";
import "./App.css";

export const JobsContext = React.createContext();

export default function App() {
  const [jobs, setJobs] = useState([]);

  return (
    <JobsContext.Provider value={{ jobsList: jobs, updateJobs: setJobs }}>
      <div className="App">
        <Header />
        <Home />
        <Jobs />
        <Footer />
      </div>
    </JobsContext.Provider>
  );
}
