import DUMMY_DATA from "./dummydata";

export const search = (title) => {
  let jobs = DUMMY_DATA.filter(
    (job) => job.jobTitle.toUpperCase() === title.toUpperCase()
  );
  return jobs;
};
