import { useContext } from "react";
import ArtCraft from "../ExtraRoute/ArtCraft";
import Bannar from "../ExtraRoute/Bannar";
import Class from "../ExtraRoute/Class";
import Revews from "../ExtraRoute/Revews";
import SectionCard from "../ExtraRoute/SectionCard";
import AllCraft from "./AllCraft";
import { AuthContext } from "../Firebase/AuthProvider";
import ArtExtra from "../ExtraRoute/ArtExtra";

const Home = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div>
        <div className="text-7xl flex justify-center p-10 w-[100vh]">
          <span className="loading loading-spinner items-center loading-lg"></span>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Bannar></Bannar>
      <AllCraft></AllCraft>
      <ArtExtra></ArtExtra>
      {/* <SectionCard></SectionCard> */}
      <ArtCraft></ArtCraft>
      <Class></Class>
      <Revews></Revews>
    </div>
  );
};

export default Home;
