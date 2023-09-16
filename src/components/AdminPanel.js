import React, { useState } from 'react';
import ProfileList from './ProfileList';
import ProfileForm from './ProfileForm';
import {saveDataToFile} from '../utils/FileUtil'
import '../css/AdminPanel.css'

const AdminPanel = () => {
    const [profiles, setProfiles] = useState([]);

    const handleAddProfile = (newProfile) => {
        // Generate a unique ID for the new profile
        const newId = Math.max(0, ...profiles.map((profile) => profile.id)) + 1;
        const profileWithId = { ...newProfile, id: newId };
        setProfiles([...profiles, profileWithId]);

        // Assuming you have a state variable 'profiles' to store the profile data
        const updatedProfiles = [...profiles, newProfile];

        // Save the updated data to a JSON file
        saveDataToFile(updatedProfiles, 'profiles.json');

        // Update the state to reflect the new profile
        setProfiles(updatedProfiles);
    };

    return (
        <div className="admin-panel">
            <ProfileForm onAddProfile={handleAddProfile} />
            <ProfileList profiles={profiles} />
        </div>
    );
};

export default AdminPanel;
