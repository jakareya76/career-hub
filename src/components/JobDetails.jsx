import { useLoaderData, useParams } from "react-router-dom";
import { saveJobApplication } from "../utility/localstorage";

const JobDetails = () => {
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
      <h1 className="text-center my-8 text-2xl font-semibold">Job Details</h1>
      <div className="grid gap-5 m-8 md:grid-cols-4">
        <div className="p-8 border grid gap-4 rounded col-span-3">
          <p className="font-semibold">
            Job Description :{" "}
            <span className="text-zinc-500 font-normal">{job_description}</span>
          </p>
          <p className="font-semibold">
            Job Responsibility :{" "}
            <span className="text-zinc-500 font-normal">
              {job_responsibility}
            </span>
          </p>
          <p className="font-semibold">
            Educational Requirements :{" "}
            <span className="text-zinc-500 font-normal">
              {educational_requirements}
            </span>
          </p>
          <p className="font-semibold">
            Experiences: :{" "}
            <span className="text-zinc-500 font-normal">{experiences}</span>
          </p>
        </div>
        <div className="p-5 border rounded col-span-1">
          <button className="btn w-full  btn-primary" onClick={handleApplyJob}>
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
