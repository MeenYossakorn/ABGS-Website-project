import React, { useState } from 'react';
import './Profilecontent.css'
import Navbar from '../Navbar/Navbar';

export default function Profilecontent() {
  const [isEditable, setIsEditable] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "SOMRAK",
    surname: "JAIDEE",
    tel: "099-999-9999",
    email: "S6403051633017@kmutnb.ac.th"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prevState => ({
      prevState,
      [name]: value
    }));
  };

  const toggleEdit = () => {
    setIsEditable(!isEditable);
  };

  return (
    <>
    <div className='body-container'>
    <div className="container">
      <h1>PROFILE</h1>
      <div className="info">
        <div className="input-group">
          <label htmlFor="name">NAME</label>
          <input
            type="text"
            id="name"
            name="name"
            value={profileData.name}
            onChange={handleChange}
            disabled={!isEditable}
          />
        </div>
        <div className="input-group">
          <label htmlFor="surname">SURNAME</label>
          <input
            type="text"
            id="surname"
            name="surname"
            value={profileData.surname}
            onChange={handleChange}
            disabled={!isEditable}
          />
        </div>
        <div className="input-group">
          <label htmlFor="tel">TEL.</label>
          <input
            type="text"
            id="tel"
            name="tel"
            value={profileData.tel}
            onChange={handleChange}
            disabled={!isEditable}
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">EMAIL</label>
          <input
            type="text"
            id="email"
            name="email"
            value={profileData.email}
            onChange={handleChange}
            disabled={!isEditable}
            
          />
        </div>
      </div>
      <div className="buttons">
        <button onClick={toggleEdit}>
          {isEditable ? "CONFIRM" : "EDIT"}
        </button>
      </div>
    </div>
    </div>
    </>
  );
}


