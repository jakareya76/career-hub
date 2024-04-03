import { useState, useEffect } from "react";

import SectionTitle from "./SectionTitle";
import Job from "./Job";

const FeatureJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    const getJobsData = async () => {
      const res = await fetch("jobs.json");
      const data = await res.json();

      setJobs(data);
    };

    getJobsData();
  }, []);

  return (
    <div className="container mx-auto px-10 py-16">
      <SectionTitle title="Featured Jobs" />

      <div className="grid grid-cols-1 gap-6 mt-10 md:grid-cols-2">
        {jobs.slice(0, dataLength).map((job) => {
          return <Job key={job.id} job={job} />;
        })}
      </div>
      <div
        className={`flex items-center justify-center ${
          dataLength === jobs.length && "hidden"
        }`}
      >
        <button
          onClick={() => setDataLength(6)}
          className="btn btn-primary px-8 text-white mt-10"
        >
          Show All Jobs
        </button>
      </div>
    </div>
  );
};

export default FeatureJobs;
