import JobList from "./JobList";
import AddJob from "./AddJob";
import { useState } from "react";

function App() {
  const [refresh, setRefresh] = useState(false);

  const handleJobAdded = () => {
    setRefresh(!refresh);
  };

  return (
    <div>
      <h1>Job Tracker</h1>
      <AddJob onJobAdded={handleJobAdded} />
      <JobList key={refresh} />
    </div>
  );
}

export default App;