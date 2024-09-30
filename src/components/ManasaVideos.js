const ManasaVideos = ({ videoSrc }) => {
  return (
    <iframe
      className="rounded-lg w-full md:h-[200px] h-[100px]"
      src={videoSrc}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );
};
export default ManasaVideos;
