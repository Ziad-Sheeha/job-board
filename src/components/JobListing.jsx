/* eslint-disable react/prop-types */
// src/components/JobListing.jsx

import { FaBookmark, FaStar, FaMapMarkerAlt } from "react-icons/fa";
import { useBookmark } from "../context/Bookmark-context.jsx"; // Use the custom hook

const JobListing = ({ job }) => {
      const { bookmarkedJobs, toggleBookmark } = useBookmark(); // Get context values
      const isBookmarked = bookmarkedJobs.some((savedJob) => savedJob.title === job.title);

      const handleBookmarkClick = () => {
            toggleBookmark(job);
      };

      return (
            <>
                  <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4 shadow-sm">
                        <div className="flex justify-between items-start">
                              {/* Job Information */}
                              <div>
                                    <h2 className="text-xl font-semibold text-gray-800">
                                          {job.title}
                                    </h2>
                                    <p className="text-sm text-gray-500">{job.timePosted}</p>
                              </div>
                              {/* Bookmark Icon */}
                              <FaBookmark
                                    className={`cursor-pointer hover:text-blue-400 ${
                                          isBookmarked ? "text-blue-500" : "text-gray-400"
                                    }`}
                                    onClick={handleBookmarkClick}
                              />
                        </div>

                        {/* Job Details */}
                        <div className="my-3">
                              <p className="text-sm text-gray-700 mb-2">{job.description}</p>
                              <div className="flex flex-wrap gap-2 mb-2">
                                    {job.tags.map((tag, index) => (
                                          <span
                                                key={index}
                                                className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded-full"
                                          >
                                                {tag}
                                          </span>
                                    ))}
                              </div>
                              <div className="flex items-center text-sm text-gray-500">
                                    <span>Payment: {job.payment}</span>
                                    <span className="mx-2">•</span>
                                    <span>{job.remoteStatus}</span>
                                    <span className="mx-2">•</span>
                                    <span>Est. Time: {job.duration}</span>
                              </div>
                        </div>

                        {/* Footer */}
                        <div className="flex justify-between items-center">
                              <div className="flex items-center text-sm text-gray-500">
                                    <span>Payment Verified</span>
                                    <FaStar className="text-yellow-400 ml-2" />
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-gray-300" />
                              </div>
                              <div className="flex items-center text-sm text-gray-500">
                                    <FaMapMarkerAlt className="text-gray-400 mr-1" />
                                    <span>{job.location}</span>
                              </div>
                        </div>
                  </div>
            </>
      );
};

export default JobListing;
