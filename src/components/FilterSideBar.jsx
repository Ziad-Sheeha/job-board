import { useState } from "react";
// import FilterListIcon from "@mui/icons-material/FilterList";

const FilterSideBar = () => {
      const [isOpen, setIsOpen] = useState(false);

      // Function to toggle the sidebar
      const toggleSidebar = () => {
            setIsOpen(!isOpen);
      };

      return (
            <div className="">
                  {/* Toggle Icon for Sidebar */}
                  {/* <FilterListIcon
                        className="md:hidden sm:block text-blue-500 cursor-pointer mb-4"
                        fontSize="large"
                        onClick={toggleSidebar}
                  /> */}

                  {/* Sidebar Container */}
                  <div
                        className={`fixed top-0 left-0 h-full w-64 bg-blue-50 p-4 z-50 transform ${
                              isOpen ? "translate-x-0" : "-translate-x-full"
                        } transition-transform md:relative md:translate-x-0`}
                  >
                        <h2 className="text-xl font-bold mb-4">Filters</h2>

                        {/* Job Type Filter */}
                        <div className="mb-4">
                              <h3 className="font-semibold mb-2">Job Type</h3>
                              <div className="flex flex-col space-y-1">
                                    <label>
                                          <input type="checkbox" className="mr-2" /> Full-time
                                    </label>
                                    <label>
                                          <input type="checkbox" className="mr-2" /> Part-time
                                    </label>
                                    <label>
                                          <input type="checkbox" className="mr-2" /> Contract
                                    </label>
                                    <label>
                                          <input type="checkbox" className="mr-2" /> Internship
                                    </label>
                              </div>
                        </div>

                        {/* Location Filter */}
                        <div className="mb-4">
                              <h3 className="font-semibold mb-2">Location</h3>
                              <select className="w-full p-2 border rounded-md">
                                    <option value="">Select Location</option>
                                    <option value="new-york">New York</option>
                                    <option value="san-francisco">San Francisco</option>
                                    <option value="los-angeles">Los Angeles</option>
                                    <option value="remote">Remote</option>
                              </select>
                        </div>

                        {/* Salary Range Filter */}
                        <div className="mb-4">
                              <h3 className="font-semibold mb-2">Salary Range</h3>
                              <div className="flex space-x-2">
                                    <input
                                          type="number"
                                          placeholder="Min"
                                          className="w-1/2 p-2 border rounded-md"
                                    />
                                    <input
                                          type="number"
                                          placeholder="Max"
                                          className="w-1/2 p-2 border rounded-md"
                                    />
                              </div>
                        </div>

                        {/* Apply Filters Button */}
                        <div>
                              <button className="w-full bg-blue-500 text-white p-2 rounded-md">
                                    Apply Filters
                              </button>
                        </div>
                  </div>

                  {/* Overlay for closing the sidebar on mobile */}
                  {isOpen && (
                        <div
                              className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
                              onClick={toggleSidebar}
                        ></div>
                  )}
            </div>
      );
};

export default FilterSideBar;
