<<<<<<< HEAD
import Content from "./UserMainPage/Content.js"
=======
import Content from "./components/Content/Content";
>>>>>>> parent of 3d0c7cb (Edit and sort folder)
import Navbar from "./components/Navbar/Navbar.js";
import Footer from "./components/Footer/Footer.js";
import { auth } from "./Auth/firebase.js";



export default function Home() {

  return (
    <>
     <div>
      {auth.currentUser.email ? (
        <p>Email: {auth.currentUser.email}</p>
      ) : (
        <p>No user is logged in</p>
      )}
    </div>
      <Navbar />
      <Content />
      <Footer />
    </>
  );
}