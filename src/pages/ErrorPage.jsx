import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen hero bg-base-200">
      <div className="text-center hero-content">
        <div className="max-w-md">
          <h1 className="my-5 text-3xl font-bold">404 Page Not Found!</h1>

          <Link to="/" className="btn btn-primary">
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
