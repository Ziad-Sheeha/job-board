import "./index.css";
import Navbar from "./common/Navbar";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import SavedJobs from "./pages/SavedJobs.jsx";
import Login from "./pages/Login";
import { BookmarkProvider } from "./context/Bookmark-context.jsx";
import JobDetails from "./pages/jobDetails.jsx";
function App() {
      return (
            <>
                  <BookmarkProvider>
                        <Navbar />

                        <Routes>
                              <Route path="/login" element={<Login />} />
                              <Route path="/" element={<Home />} />
                              <Route path="/saved-jobs" element={<SavedJobs />} />
                              <Route path="/job-details" element={<JobDetails />} />
                        </Routes>
                  </BookmarkProvider>
            </>
      );
}

export default App;
