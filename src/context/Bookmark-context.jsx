/* eslint-disable react/prop-types */
// src/context/BookmarkContext.jsx
import { createContext, useContext, useState } from "react";

// Create the Context
const BookmarkContext = createContext();

// Create a provider component
export const BookmarkProvider = ({ children }) => {
      const [bookmarkedJobs, setBookmarkedJobs] = useState([]);

      const toggleBookmark = (job) => {
            setBookmarkedJobs((prev) => {
                  if (prev.some((savedJob) => savedJob.title === job.title)) {
                        return prev.filter((savedJob) => savedJob.title !== job.title);
                  } else {
                        return [...prev, job];
                  }
            });
      };

      return (
            <BookmarkContext.Provider value={{ bookmarkedJobs, toggleBookmark }}>
                  {children}
            </BookmarkContext.Provider>
      );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useBookmark = () => useContext(BookmarkContext);
