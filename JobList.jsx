import { useEffect, useState } from "react";

function JobList() {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = () => {
  fetch("http://localhost:8081/jobs")
    .then((res) => res.json())
    .then((data) => setJobs(data));
};

useEffect(() => {
  fetchJobs();
}, []);


  return (
    <div>
      <h2>Jobs</h2>
      {jobs.length === 0 ? (
        <p>No jobs found</p>
      ) : (
        jobs.map((job) => (
          <div key={job.id}>
            <p><b>Company:</b> {job.companyName}</p>
            <p><b>Role:</b> {job.role}</p>
            <p><b>Status:</b> {job.status}</p>
            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default JobList;