import React, { useEffect, useState } from "react";
import { auth, db } from "../Auth/firebase";
import { doc, getDoc } from "firebase/firestore";
import axios from "axios";

const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const token = await user.getIdToken(); // รับ token ของผู้ใช้
          
          const response = await axios.get("/users/profile", {
            headers: {
              Authorization: `Bearer ${token}`, // ส่ง token ใน headers
            },
          });

          // ตรวจสอบการตอบกลับจากเซิร์ฟเวอร์และตั้งค่าข้อมูลผู้ใช้
          setUserData(response.data);
        } catch (error) {
          console.error("Error fetching user data from server: ", error);
        } finally {
          setLoading(false); // หยุดการโหลด
        }
      } else {
        setUserData(null); // ถ้าไม่ได้ล็อกอิน ให้เคลียร์ข้อมูล
        setLoading(false); // หยุดการโหลด
      }
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  // ตรวจสอบว่ามีข้อมูลผู้ใช้หรือไม่
  if (!userData) {
    return <p>No user data available.</p>;
  }

  return { userData };
};

export default UserProfile;
