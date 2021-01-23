import DUMMY_DATA from "./dummydata";

export const search = (title) => {
  let jobs = DUMMY_DATA.filter((job) => job.jobTitle === title);
  return jobs;
};
