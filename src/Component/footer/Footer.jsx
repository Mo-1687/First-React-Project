import "./Footer.css"
function Footer() {
  return (
    <>
      <footer>
        <div className="details">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-4">
                <h2 className="text-uppercase">Location</h2>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
              </div>
              <div className="col-md-4">
                <h2 className="text-uppercase">Around The Web</h2>
                <div className="social d-flex align-items-center justify-content-center mt-2">
                  <i className="fab fa-fw fa-facebook"></i>
                  <i className="fab fa-fw fa-twitter"></i>
                  <i className="fab fa-fw fa-linkedin-in"></i>
                  <i className="fa-solid fa-fw fa-globe"></i>
                </div>
              </div>
              <div className="col-md-4">
                <h2 className="text-uppercase">ABOUT FREELANCER</h2>
                <p>
                  Freelance is a free to use, licensed Bootstrap theme created
                  by Route
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center copy-right text-white py-4">
          Copyright © Your Website 2021
        </div>
      </footer>
    </>
  );
}

export default Footer;
