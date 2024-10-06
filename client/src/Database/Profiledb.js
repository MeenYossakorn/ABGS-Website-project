import React ,{useEffect , useState}from "react"
import { auth,db } from "../Auth/firebase";
import { doc, getDoc } from "firebase/firestore";

const UserProfile = () => {
    const [userData, setUserData] = useState(null);
  
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(async (user) => {
        if (user) {
          try {
            const userRef = doc(db, "users", user.uid);
            const docSnap = await getDoc(userRef);
  
            if (docSnap.exists()) {
              setUserData(docSnap.data());
            } else {
              console.log("No such document!");
            }
          } catch (error) {
            console.error("Error fetching user data: ", error);
          } 
        } else {
          setUserData(null);
          
        }
      });
  
      return () => unsubscribe();
    }, []);
  
    return { userData };
  };
  
  export default UserProfile;