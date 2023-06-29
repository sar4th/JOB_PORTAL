import React, { useState } from 'react';
import axios from 'axios';
import { Server } from '../App';

const NewJob = () => {
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [requirements, setRequirements] = useState('');
  const [salary, setSalary] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const NewJob = {
        title,
        company,
        location,
        description,
        requirements: requirements.split(',').map((req) => req.trim()),
        salary: Number(salary),
      };

      const response = await axios.post(`${Server}/emp/new-job`, NewJob); // Replace '/api/jobs' with your API endpoint for creating a new job post
      console.log('Job post created:', response.data);

      // Reset form fields
      setTitle('');
      setCompany('');
      setLocation('');
      setDescription('');
      setRequirements('');
      setSalary('');
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <div>
      <h1>Create Job Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="company">Company:</label>
          <input
            type="text"
            id="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="requirements">Requirements (comma-separated):</label>
          <input
            type="text"
            id="requirements"
            value={requirements}
            onChange={(e) => setRequirements(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="salary">Salary:</label>
          <input
            type="number"
            id="salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            required
          />
        </div>
        <button type="submit">Create Job Post</button>
      </form>
    </div>
  );
};

export default NewJob;
