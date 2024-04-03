import { useLoaderData } from "react-router-dom";
import { getJobApplication } from "../utility/localstorage";
import { useEffect, useState } from "react";

const AppliedJobsPage = () => {
  const [appliedJobsList, setAppliedJobsList] = useState([]);
  const jobs = useLoaderData();

  useEffect(() => {
    const storedJobIds = getJobApplication();

    if (jobs.length > 0) {
      const appliedJobs = jobs.filter((job) => storedJobIds.includes(job.id));

      setAppliedJobsList(appliedJobs);
    }
  }, []);

  return <div>{appliedJobsList.length}</div>;
};

export default AppliedJobsPage;
