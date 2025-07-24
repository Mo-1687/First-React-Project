import Tag from "../Tag/Tag";

function About() {
  const title = "about component";
  return (
    <div className="background-shared">
      <div className="about">
        <div className="container">
          <Tag title={title} />
          <div className="row mt-1 g-3">
            <div className="col-md-6 ps-md-5 ">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className="col-md-6 pe-md-5 ">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
