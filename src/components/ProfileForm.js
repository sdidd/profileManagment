import React, { useState } from 'react';
import axios from 'axios';
import '../css/Form.css';

const ProfileForm = ({ onAddProfile }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    address: '',
    latitude: '',
    longitude: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new profile object
    const newProfile = { ...formData };

    // Send a POST request to your backend server to add the profile
    axios.post('https://glorious-carnival-7xrq7qwj5gg3jrq-3001.app.github.dev/api/addProfile', newProfile)
      .then((response) => {
        // Handle success if needed
        console.log(response.data.message);
        // You can also call the onAddProfile callback here if needed
        onAddProfile(newProfile);
      })
      .catch((error) => {
        // Handle error if needed
        console.error(error);
      });

    // Reset the form data
    setFormData({
      name: '',
      description: '',
      address: '',
      latitude: '',
      longitude: '',
    });
  };

  return (
      <div className="profile-form">
        <h2>Add a New Profile</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
          </label>
          <label>
            Description:
            <input type="text" name="description" value={formData.description} onChange={handleInputChange} required />
          </label>
          <label>
            Address:
            <input type="text" name="address" value={formData.address} onChange={handleInputChange} required />
          </label>
          <label>
            Latitude:
            <input type="text" name="latitude" value={formData.latitude} onChange={handleInputChange} required />
          </label>
          <label>
            Longitude:
            <input type="text" name="longitude" value={formData.longitude} onChange={handleInputChange} required />
          </label>
          <button type="submit">Add Profile</button>
        </form>
      </div>
  );
};

export default ProfileForm;
