import React, { useState } from 'react';
import axios from 'axios';
import { Server } from '../App';

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');

  const fetchJobs = async () => {
    try {
      const response = await axios.get(`${Server}/users/get-search`, {
        params: { keyword, location }
      });
      setJobs(response.data);
    } catch (error) {
      console.error(error);
     console.log(error);
    }
  };

  const handleSearch = () => {
    fetchJobs();
  };

  return (
    <div>
      <h2>Job Search</h2>
      <div>
        <label htmlFor="keyword">Keyword:</label>
        <input
          type="text"
          id="keyword"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <button onClick={handleSearch}>Search</button>

      {jobs.length > 0 ? (
        <div>
          <h2>Search Results</h2>
          <ul>
            {jobs.map((job) => (
              <li key={job._id}>
                <h3>Title :{job.title}</h3>
                <p> Location :{job.location}</p>
                <p> Description :{job.description}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No jobs found</p>
      )}
    </div>
  );
};

export default Home;
