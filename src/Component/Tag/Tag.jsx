import "./Tag.css";

function Tag({ title }) {
  return (
    <>
      <div className="tag d-flex flex-column align-items-center justify-content-center">
        <h2 className="fs-1 fw-bold text-uppercase position-relative mb-2 ">
          {title}
        </h2>
        <div className="tag-style position-relative">
          <i className="fa-solid fa-star"></i>
        </div>
      </div>
    </>
  );
}

export default Tag;
