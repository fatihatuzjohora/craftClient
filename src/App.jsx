import { Outlet } from "react-router-dom";
import "./App.css";
import Navber from "./Components/Navber/Navber";
import Footer from "./Components/Footer";
import { useContext } from "react";
import { AuthContext } from "./Components/Firebase/AuthProvider";

function App() {
  const { loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="text-7xl flex justify-center">
        <span className="loading loading-spinner items-center loading-lg"></span>
      </div>
    );
  }
  return (
    <div>
      <div className="min-h-[100vh] max-w-7xl mx-auto">
        <Navber></Navber>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
