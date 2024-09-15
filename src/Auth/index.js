import { useState, useEffect } from 'react';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';



const useAuth = () => {
  const [user, setUser] = useState(null);
  

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    
    return () => unsubscribe(); // cleanup subscription เมื่อ component ถูก unmount
  }, []);

  
  const updateUser = (newUser) => {
    setUser(newUser); // อัปเดตค่าผู้ใช้ทันที
  };

  
  return {user,updateUser};
};

export default useAuth;