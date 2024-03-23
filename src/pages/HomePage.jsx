import heroImage from "../assets/images/user.png";

const HomePage = () => {
  return (
    <div class="hero bg-blue-50">
      <div class="flex items-center justify-center flex-col lg:flex-row-reverse">
        <div className="lg:w-1/2">
          <img src={heroImage} />
        </div>
        <div className="lg:w-1/2">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold max-w-[410px] ">
            One Step Closer To Your{" "}
            <span className="text-primary">Dream Job</span>
          </h1>
          <p class="py-6 max-w-[420px] text-zinc-600">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
