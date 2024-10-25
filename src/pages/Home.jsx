import FilterSideBar from "../components/FilterSideBar";
import JobListing from "../components/JobListing";
import { jobData } from "../data/data.js";

const Home = () => {
      return (
            <div className="flex">
                  <FilterSideBar />
                  <div className="flex-1 flex justify-center mt-8">
                        <div className="jobList  ">
                              <div className="flex-grow mb-8 hidden md:block">
                                    <input
                                          type="text"
                                          placeholder="Search for jobs..."
                                          className="w-full shadow-md px-4 py-2 rounded-md"
                                    />
                              </div>
                              {jobData.map((job, index) => (
                                    <JobListing key={index} job={job} />
                              ))}
                        </div>
                  </div>
            </div>
      );
};

export default Home;
