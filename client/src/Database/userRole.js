// import React, { useEffect, useState } from "react";
// import { db, auth } from "../Auth/firebase";
// import { doc, getDoc } from "firebase/firestore";
// import { useNavigate } from "react-router-dom"; // ใช้ React Router DOM สำหรับการเปลี่ยนเส้นทาง

// const useUserRole = () => {
//   const [role, setRole] = useState(null);
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged(async (user) => {
//       if (user) {
//         try {
//           const userRef = doc(db, "users", user.uid);
//           const docSnap = await getDoc(userRef);

//           if (docSnap.exists()) {
//             const userData = docSnap.data();
//             setRole(userData.role); // สมมติว่า role ถูกเก็บไว้ใน field `role`
//             setLoading(false);
//           }
//         } catch (error) {
//           console.error("Error fetching user data: ", error);
//           setLoading(false);
//         }
//       }
//     });

//     return () => unsubscribe();
//   }, [navigate]);
//   return { role, loading };
// };

// export default useUserRole;
