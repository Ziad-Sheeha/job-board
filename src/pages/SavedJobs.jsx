// src/pages/SavedJobs.jsx
import { useState } from "react";
import { useBookmark } from "../context/Bookmark-context.jsx";
import { FaBookmark, FaMapMarkerAlt, FaStar } from "react-icons/fa";
import GenericDialog from "../common/GenericDialog.jsx";

import listImage from "../assets/2670441.webp";

const SavedJobs = () => {
      const { bookmarkedJobs, toggleBookmark } = useBookmark();
      const [open, setOpen] = useState(false);
      const [selectedJob, setSelectedJob] = useState(null);

      // Handle opening the dialog
      const handleClickOpen = (job) => {
            setSelectedJob(job);
            setOpen(true);
      };

      // Handle closing the dialog
      const handleClose = () => {
            setOpen(false);
            setSelectedJob(null);
      };

      // Handle confirm removal
      const handleConfirmRemove = () => {
            if (selectedJob) {
                  toggleBookmark(selectedJob);
            }
            handleClose();
      };

      return (
            <div className="p-4">
                  <div className="flex-grow mb-8 hidden md:block">
                        <input
                              type="text"
                              placeholder="Search for jobs..."
                              className="w-full  shadow-md px-4 py-2 rounded-md"
                        />
                  </div>
                  {bookmarkedJobs.length === 0 ? (
                        <div className=" flex flex-col justify-center items-center">
                              <img src={listImage} alt="list image" />
                              <p className="text-blue-400 text-xl">No saved jobs yet.</p>
                        </div>
                  ) : (
                        bookmarkedJobs.map((job, index) => (
                              <div
                                    key={index}
                                    className="bg-white border border-gray-200 rounded-lg p-4 mb-4 shadow-sm "
                              >
                                    <div className="flex justify-between items-start">
                                          {/* Job Information */}
                                          <div>
                                                <h2 className="text-xl font-semibold text-gray-800">
                                                      {job.title}
                                                </h2>
                                                <p className="text-sm text-gray-500">
                                                      {job.timePosted}
                                                </p>
                                          </div>
                                          {/* Bookmark Icon */}
                                          <FaBookmark
                                                className="text-blue-500 cursor-pointer"
                                                onClick={() => handleClickOpen(job)}
                                          />
                                    </div>
                                    {/* Job Details */}
                                    <div className="my-3">
                                          <p className="text-sm text-gray-700 mb-2">
                                                {job.description}
                                          </p>
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
                        ))
                  )}

                  {/* Confirmation Dialog */}
                  <GenericDialog
                        open={open}
                        onClose={handleClose}
                        title="Confirm Removal"
                        content="Are you sure you want to remove this job from your saved list?"
                        onConfirm={handleConfirmRemove}
                        confirmText="Remove"
                        cancelText="Cancel"
                  />
            </div>
      );
};

export default SavedJobs;
