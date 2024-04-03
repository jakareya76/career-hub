import { useEffect, useState } from "react";
import { useLoaderData, Link } from "react-router-dom";
import { getJobApplication } from "../utility/localstorage";

import locationIcon from "../assets/icons/location2.png";
import moneyIcon from "../assets/icons/money.png";

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

  console.log(appliedJobsList);

  return (
    <>
      <div className="p-16 bg-zinc-200">
        <h2 className="text-3xl font-bold text-center">Applied Jobs</h2>
      </div>
      <div className="container mx-auto">
        <div className="grid gap-8 mt-20">
          {appliedJobsList.map((item) => {
            return (
              <div key={item.id} className="flex p-5 border rounded-xl">
                <div className="flex items-center justify-center p-16 bg-zinc-100">
                  <img
                    src={item.logo}
                    alt=""
                    className="w-[150px] rounded-xl"
                  />
                </div>
                <div className="px-5 py-2">
                  <h2 className="text-2xl font-bold">{item.job_title}</h2>
                  <h4 className="my-2 text-xl font-medium">
                    {item.company_name}
                  </h4>
                  <div className="flex gap-4 my-4">
                    <button className="px-5 py-2 text-blue-500 border border-blue-500 rounded">
                      {item.remote_or_onsite}
                    </button>
                    <button className="px-5 py-2 text-blue-500 border border-blue-500 rounded">
                      {item.job_type}
                    </button>
                  </div>
                  <div className="flex items-center gap-6 my-3">
                    <div className="flex items-center justify-center gap-1">
                      <img src={locationIcon} alt="icon" />
                      <p>{item.location}</p>
                    </div>
                    <div className="flex items-center justify-center gap-1">
                      <img src={moneyIcon} alt="icon" />
                      <p>Salary : {item.salary}</p>
                    </div>
                  </div>
                  <br />
                  <Link
                    to={`/job/${item.id}`}
                    className="px-6 py-3 text-white bg-blue-500 border rounded-lg"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AppliedJobsPage;
