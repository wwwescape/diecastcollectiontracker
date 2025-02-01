import React, { useState } from "react";
import axios from "axios";
import { REACT_APP_API_URL } from "../constants";
import "./Settings.css";

const Settings = () => {
  const [showWarning, setShowWarning] = useState(false);

  const handlePurge = async () => {
    try {
      await axios.delete(`${REACT_APP_API_URL}/api/purge`);
      alert("All data and images have been purged successfully");
    } catch (error) {
      console.error("Error purging data:", error);
      alert("Error purging data");
    } finally {
      setShowWarning(false);
    }
  };

  return (
    <div className="settings-page">
      <h1>Settings</h1>
      <div className="data-section">
        <h2>Data</h2>
        <button onClick={() => setShowWarning(true)} className="purge-button">
          Purge All Data and Images
        </button>
      </div>

      {showWarning && (
        <div className="warning-popup">
          <div className="warning-content">
            <p>
              Are you sure you want to purge all data and images? This action
              cannot be undone.
            </p>
            <div className="warning-buttons">
              <button onClick={handlePurge} className="proceed-button">
                Proceed
              </button>
              <button
                onClick={() => setShowWarning(false)}
                className="cancel-button"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;
