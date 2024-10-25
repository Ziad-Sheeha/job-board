import { NavLink } from "react-router-dom";
import { useBookmark } from "../context/Bookmark-context.jsx";

const Navbar = () => {
      const { bookmarkedJobs } = useBookmark();

      return (
            <div className="">
                  {/* Main Navigation */}
                  <nav className="bg-gray-800 p-4 flex items-center justify-between flex-wrap">
                        {/* Logo */}
                        <div className="text-white text-xl font-bold">JobBoard</div>

                        {/* Search Bar */}
                        {/* <div className="flex-grow mx-4 hidden md:block">
                              <input
                                    type="text"
                                    placeholder="Search for jobs..."
                                    className="w-full p-2 rounded-md"
                              />
                        </div> */}
                        {/* Tabs below the Navigation */}
                        <div className="p-2 flex justify-center">
                              <NavLink
                                    to="/"
                                    exact
                                    className={({ isActive }) =>
                                          isActive ? "text-blue-300 mx-4" : "text-white mx-4"
                                    }
                              >
                                    Home
                              </NavLink>
                              <NavLink
                                    to="/saved-jobs"
                                    className={({ isActive }) =>
                                          isActive ? "text-blue-300 mx-4" : "text-white mx-4"
                                    }
                              >
                                    Saved Jobs
                                    {bookmarkedJobs.length > 0 && (
                                          <span className="ml-2 bg-blue-500 text-white rounded-full px-2 py-1 text-xs">
                                                {bookmarkedJobs.length}
                                          </span>
                                    )}
                              </NavLink>
                        </div>
                        {/* Login Button */}
                        <div>
                              <NavLink
                                    to="/login"
                                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                              >
                                    Login
                              </NavLink>
                        </div>
                  </nav>
            </div>
      );
};

export default Navbar;
