import { useForkRef } from "@mui/material";
import React, { useState, useEffect } from "react";

// import react-icons/fa;

const url = "https://course-api.com/react-tabs-project";
function Main() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    );
  }

  const { company, dates, duties, title } = jobs[value];
  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {jobs.map((item, index) => {
            return (
              <button
                key={id}
                onClick={() => setValue(index)}
                c
                className={`job-btn ${index === value && "active-btn"}`}
              >
                {item.company}
              </button>
            );
          })}
          <div>
            {/*  job info */}
            <article className="job-info">
              <h3>{title}</h3>
              <h4>{company}</h4>
              <p className="job-date">{dates}</p>
              {duties.map((duty, index) => {
                return (
                  <div key={index} className="job-icon">
                    <i class="fa fa-angle-double-right" aria-hidden="true"></i>
                    <p>{duty}</p>
                  </div>
                );
              })}
            </article>
          </div>
          <button type="button" className="btn">
            more info
          </button>
        </div>
      </div>
    </section>
  );
}

export default Main;