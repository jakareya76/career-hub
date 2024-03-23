const SectionTitle = ({ title }) => {
  return (
    <div>
      <h2 className="text-3xl text-center font-semibold md:text-4xl">
        {title}
      </h2>
      <p className="text-center my-4 text-zinc-500">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
    </div>
  );
};

export default SectionTitle;
