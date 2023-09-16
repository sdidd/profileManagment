import React, { useState, useEffect } from 'react';
import ProfileDetails from './ProfileDetails';
import '../ProfileList.css'; // Create this CSS file for styling

const ProfileList = () => {
  const [profiles, setProfiles] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState(null);

  useEffect(() => {
    fetch('/profiles.json')
      .then((response) => response.json())
      .then((data) => setProfiles(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleSummaryClick = (profile) => {
    setSelectedProfile(profile);
  };

  return (
    <div className="profile-list-container">
      <h1>Profile List</h1>
      <div className="profile-list">
        {profiles.map((profile) => (
          <div key={profile.id} className="profile-card">
            <h2>{profile.name}</h2>
            <p>{profile.description}</p>
            <button onClick={() => handleSummaryClick(profile)}>Summary</button>
          </div>
        ))}
      </div>
      {selectedProfile && <ProfileDetails profile={selectedProfile} />}
    </div>
  );
};

export default ProfileList;
