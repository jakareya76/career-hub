import { Link, useLoaderData, useParams } from "react-router-dom";
import { saveJobApplication } from "../utility/localstorage";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const JobDetails = () => {
  const { user } = useContext(AuthContext);

  const jobs = useLoaderData();

  const { id } = useParams();

  const idInt = parseInt(id);

  const job = jobs.find((job) => job.id === idInt);

  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
  } = job;

  const handleApplyJob = () => {
    saveJobApplication(idInt);
  };

  return (
    <div className="container mx-auto">
      <h1 className="my-8 text-2xl font-semibold text-center">Job Details</h1>
      <div className="grid gap-5 m-8 md:grid-cols-4">
        <div className="grid col-span-3 gap-4 p-8 border rounded">
          <p className="font-semibold">
            Job Description :{" "}
            <span className="font-normal text-zinc-500">{job_description}</span>
          </p>
          <p className="font-semibold">
            Job Responsibility :{" "}
            <span className="font-normal text-zinc-500">
              {job_responsibility}
            </span>
          </p>
          <p className="font-semibold">
            Educational Requirements :{" "}
            <span className="font-normal text-zinc-500">
              {educational_requirements}
            </span>
          </p>
          <p className="font-semibold">
            Experiences: :{" "}
            <span className="font-normal text-zinc-500">{experiences}</span>
          </p>
        </div>
        <div className="col-span-1 p-5 border rounded">
          {user ? (
            <button className="w-full btn btn-primary" onClick={handleApplyJob}>
              Apply Now
            </button>
          ) : (
            <Link to="/sing-up" className="w-full btn btn-primary">
              Sign Up To Applay
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
