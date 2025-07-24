import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import "./NotFound.css";
import  notFound  from "../../assets/2417237.jpg";
function NotFound() {
  return (
    <>
      <Navbar />
      <div className="not-found">
        <img src={notFound} alt="notFound" className="not-found-img " />
        <Link className="btn" to="/">Go to Home</Link>
      </div>
    </>
  );
}

export default NotFound;
