import Poster from "../assets/poster.png";
const VideoSection = () => {
  return (
    <div className="container-fluid bg-stepsSection">
      <div className="container-md p-5 ">
        <h3 className="font3 color-dark-blue p-4">
          ویدیو معرفی ویژگی های صندوق کاردان
        </h3>
        <div className="d-flex justify-content-center align-items-center">
          <video width="65%" loop controls poster={Poster} className="border-3">
            <source type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
