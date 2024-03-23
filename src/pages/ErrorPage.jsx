import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-3xl my-5 font-bold">404 Page Not Found!</h1>

          <Link to="/" class="btn btn-primary">
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
