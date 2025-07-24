import Tag from "../Tag/Tag";
import avatar from "../../assets/avataaars.svg";

function Home() {
  const title = "Start FrameWork";
  return (
    <>
      <div className="background-shared">
        <div className=" home">
          <div className="container d-flex align-items-center justify-content-center flex-column">
            <div className="img-container mb-2">
              <img src={avatar} alt="avatar" className="w-100 mb-3 rounded" />
            </div>
            <Tag title={title} />
            <p className="mt-2">Graphic Artist - Web Designer - Illustrator</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
