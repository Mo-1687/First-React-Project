import { useState } from "react";
import Tag from "../Tag/Tag";
import port1 from "../../assets/poert1.png";
import port2 from "../../assets/port2.png";
import port3 from "../../assets/port3.png";
import "./Portfoliol.css"
function Portfolio() {
  const [selectedImg, setSelectedImg] = useState(null);

  const title = "portfolio component";
  // Array of image paths
  const imgsArray = [port1, port2, port3, port1, port2, port3];
  const imgs = imgsArray.map((_, index) => {
    return (
      <div className="col-lg-4 col-md-6" key={index}>
        <div
          className="img-container rounded-3 position-relative overflow-hidden "
          key={index}
          onClick={() => displayImage(index)}
        >
          <div className="overlay position-absolute start-0 top-0 w-100 h-100 d-flex justify-content-center align-items-center">
            <i className="fa-solid fa-plus text-white fa-5x "></i>
          </div>
          <img
            src={imgsArray[index]}
            alt={`Portfolio ${index + 1}`}
            className="w-100 h-100 object-fit-cover rounded-3"
          />
        </div>
      </div>
    );
  });

  // Display The Image That Has Been Clicked
  function displayImage(index) {
    setSelectedImg(imgsArray[index]);
  }

  // Hide The Image
  function hideImage(e) {
    if (e.target === e.currentTarget) {
      setSelectedImg(null);
    }
  }

  return (
    <div className="portfolio">
      <Tag title={title} />
      <div className="container mb-5">
        <div className="imgs-grid row g-5 mt-2">{imgs}</div>
      </div>
      <div
        className={`position-fixed start-0 top-0 h-100 w-100 justify-content-center align-items-center bg-primary bg-opacity-25 ${
          selectedImg === null ? "d-none" : "d-flex"
        }`}
        onClick={hideImage}
      >
        <img
          src={selectedImg}
          alt="Portfolio image"
          className=" display-model "
        />
      </div>
    </div>
  );
}

export default Portfolio;
