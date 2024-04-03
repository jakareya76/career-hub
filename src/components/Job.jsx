import { Link } from "react-router-dom";
import locationIcon from "../assets/icons/location2.png";
import moneyIcon from "../assets/icons/money.png";

const Job = ({ job }) => {
  const {
    id,
    logo,
    company_name,
    salary,
    remote_or_onsite,
    location,
    job_type,
    job_title,
  } = job;

  return (
    <div className="p-8 border rounded">
      <img src={logo} alt="logo" className="max-w-32" />
      <h2 className="text-xl my-2 font-semibold">{job_title}</h2>
      <p className="text-zinc-500 font-medium text-lg">{company_name}</p>
      <div className="flex items-center gap-5 my-3">
        <button className="px-6 py-2 border rounded-md font-medium border-blue-400 text-blue-400">
          {remote_or_onsite}
        </button>
        <button className="px-6 py-2 border rounded-md font-medium border-blue-400 text-blue-400">
          {job_type}
        </button>
      </div>
      <div className="flex items-center my-3 gap-6">
        <div className="flex items-center justify-center gap-1">
          <img src={locationIcon} alt="icon" />
          <p>{location}</p>
        </div>
        <div className="flex items-center justify-center gap-1">
          <img src={moneyIcon} alt="icon" />
          <p>Salary : {salary}</p>
        </div>
      </div>

      <Link to={`/job/${id}`} className="btn px-8 btn-primary text-white mt-2">
        View Details
      </Link>
    </div>
  );
};

export default Job;
