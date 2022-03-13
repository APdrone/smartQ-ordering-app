// import app from "../firebase";

import Navbar from "../components/Navbar";
import UserRoutes from "../components/UserRoutes";
import { BrowserRouter } from "react-router-dom";

const Home = () => {
  //   const ref = app
  //     .fireStore()
  //     .collection("https://singular-array-332203-default-rtdb");
  //   console.log(ref);
  //   console.log(typeof data);
  //   const fetchedData = JSON.parse(data);
  //   console.log(fetchedData);

  return (
    <BrowserRouter>
      <Navbar />
      <UserRoutes />
      {/* <Dashboard appData={data} /> */}
    </BrowserRouter>
  );
};

export default Home;
