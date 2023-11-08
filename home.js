import NavBar from "../Components/navBar";
import Eshop from "../Components/eShop";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <NavBar canSearch={true} linkA={<Link to="/login">ir a login</Link>}></NavBar>
      <Eshop></Eshop>
    </>
  );
}
export default Home;
