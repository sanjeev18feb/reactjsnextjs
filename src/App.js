import React, { useState } from 'react';
import './App.css';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ikpmlvdvlrikutejcbfj.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlrcG1sdmR2bHJpa3V0ZWpjYmZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ0NzY4NDMsImV4cCI6MjAzMDA1Mjg0M30.Ls99A3i5aFUCAjc_DCXgvgiNKJtOqhRoX7KfdoJoIHw';
const supabase = createClient(supabaseUrl, supabaseKey);

function App() {
  // eslint-disable-next-line
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const saveProfileData = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('profile')
        .insert([formData]);

      if (error) {
        throw error;
      }

      setProfileData(data);
      setShowPopup(false);
    } catch (error) {
      console.error('Error saving profile data:', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <header className="app__header">
        <h1 className="app__heading">SANJEEV KUMAR</h1>
        <div className="app__profile">
          <button className="app__profileButton" onClick={() => setShowPopup(true)}>Profile</button>
        </div>
      </header>
      

      <main className="app__dashboard">
        <button className="app__dashboardButton">Home</button>
        <button className="app__dashboardButton">Contact</button>
        <button className="app__dashboardButton">Chat</button>
        <button className="app__dashboardButton">Settings</button>
      </main>
      
      {showPopup && (
        <div className="popup">
          <div className="popup__content">
            <h2>Enter Profile Information</h2>
            <form onSubmit={(e) => { e.preventDefault(); saveProfileData(); }}>
              {loading && <p>Loading profile...</p>}
              <label>Name:</label>
              <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
              <label>Address:</label>
              <input type="text" name="address" value={formData.address} onChange={handleInputChange} />
              <button type="submit">Save</button>
              <button onClick={() => setShowPopup(false)}>Cancel</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
