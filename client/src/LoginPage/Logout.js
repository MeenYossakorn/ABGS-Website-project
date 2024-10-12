
// import React from 'react';
// import { signOut } from 'firebase/auth';
// import { Auth } from '../Auth/Auth';
// import { useNavigate } from 'react-router-dom';
// import {doSignOut} from "../Auth/Auth";
// import useAuth from '../Auth';
// import UserProfile from '../Database/Profiledb';

// const Logout = () => {
//   const navigate = useNavigate();
  
//   const { user,updateUser } = useAuth();
//   const { userData } = UserProfile();
//   const handleLogout = () => {
//     doSignOut().then(() => {
//       updateUser(null);
//       navigate("/home");
//     }).catch((error) => {
//       console.error("Error logging out:", error);
//     });
//   };

//   return (
//     <>
//     <button onClick={handleLogout}>Logout</button></>
//   );
// };

// export default Logout;
