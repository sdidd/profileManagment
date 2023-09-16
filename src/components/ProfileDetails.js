import React from 'react';
import Map from '../components/Map'

const ProfileDetails = ({ profile }) => {
  return (
    <div className="profile-details">
      <h2>{profile.name}</h2>
      <p>{profile.description}</p>
      <p>Address: {profile.address}</p>
      {/* You can add more details here */}
      <Map profile={profile} /> {/* Display the map */}
    </div>
  );
};

export default ProfileDetails;
