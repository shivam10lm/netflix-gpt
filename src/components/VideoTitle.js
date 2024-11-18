const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute inset-0 bg-gradient-to-r from-black">
      <div className="w-full px-6 md:px-24 mt-[20%]">
        <h1 className="text-2xl md:text-6xl font-bold text-white">{title}</h1>
        <p className="hidden md:block py-6 text-lg w-1/4 text-white">
          {overview}
        </p>
        <div className="flex items-center gap-4 mt-4">
          <button className="bg-white text-black py-1 md:py-4 px-3 md:px-12 text-xl rounded-lg hover:bg-opacity-80 flex items-center">
            <span className="mr-2">▶️</span> Play
          </button>
          <button className="hidden md:flex items-center bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};
export default VideoTitle;
