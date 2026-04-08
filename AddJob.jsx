import { useState } from "react";

function AddJob({ onJobAdded }) {
  const [job, setJob] = useState({
    companyName: "",
    role: "",
    status: ""
  });

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8081/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ...job,
        dateApplied: new Date().toISOString().split("T")[0]
      })
    })
      .then((res) => res.json())
      .then(() => {
        alert("Job added!");
        onJobAdded(); // refresh list
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Job</h2>

      <input
        name="companyName"
        placeholder="Company"
        value={job.companyName}
        onChange={handleChange}
      />

      <input
        name="role"
        placeholder="Role"
        value={job.role}
        onChange={handleChange}
      />

      <input
        name="status"
        placeholder="Status"
        value={job.status}
        onChange={handleChange}
      />

      <button type="submit">Add</button>
    </form>
  );
}

export default AddJob;