import Navbar from "../components/Navbar";
import UserRoutes from "../components/UserRoutes";
import { BrowserRouter } from "react-router-dom";

const Home = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <UserRoutes />
    </BrowserRouter>
  );
};

export default Home;
