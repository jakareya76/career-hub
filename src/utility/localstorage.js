const getJobApplication = () => {
  const storedJobApplication = localStorage.getItem("job-application");

  if (storedJobApplication) {
    return JSON.parse(storedJobApplication);
  } else {
    return [];
  }
};

const saveJobApplication = (id) => {
  const storedJobApplications = getJobApplication();

  const isExists = storedJobApplications.find((jobId) => jobId === id);

  if (!isExists) {
    storedJobApplications.push(id);

    localStorage.setItem(
      "job-application",
      JSON.stringify(storedJobApplications)
    );
  }
};

export { saveJobApplication, getJobApplication };
