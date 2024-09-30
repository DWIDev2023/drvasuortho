import React from "react";
import { Tab, TabScreen, Tabs } from "react-tabs-scrollable";
import medicalExperts from "../../assets/images/home/medical-experts.png";
import { useBlogData } from "../../controller/blogDataContext";
function getVideoIdFromEmbedLink(embedLink) {
  // Regular expression to match the video ID
  var regex = /(?:\/|%3D|v=|vi=)([0-9A-z-_]{11})(?:[\S]+)?/i;

  // Extract video ID using the regular expression
  var match = embedLink.match(regex);

  // Check if a match is found
  if (match && match[1]) {
    return match[1];
  } else {
    return null;
  }
}
const VideosList = ({ videos, onSelectVideo }) => {
  const playMainVideo = (videosrc) => {
    onSelectVideo(videosrc);
  };

  return (
    <div className="max-sm:m-4 mt-0 space-y-5">
      {videos?.map((video) => {
        return (
          <button key={video._id} onClick={() => playMainVideo(video.videosrc)}>
            <div className="flex items-center">
              <img
                className=" max-w-[100px] max-h-[80px] rounded"
                src={`https://img.youtube.com/vi/${getVideoIdFromEmbedLink(
                  video.videosrc
                )}/0.jpg`}
              />
              <p className="text-[#222F66] ps-4 line-clamp-3 text-left">{video.displayname}</p>
            </div>
          </button>
        );
      })}
    </div>
  );
};
const HealthTalksTabs = ({ onSelectVideo }) => {
  const [activeTab, setActiveTab] = React.useState(0);

  const onTabClick = (e, index) => {
    setActiveTab(index);
  };
  const videos = useBlogData()?.allblogs.filter((blog) => blog.type === 1);
  return (
    <div className="health-talk-tabs">
      <Tabs
        activeTab={activeTab}
        onTabClick={onTabClick}
        hideNavBtnsOnMobile={false}
      >
        <Tab className="text-sm px-0">All</Tab>
        <Tab className="text-sm">Featured</Tab>
        <Tab className="text-sm">Latest</Tab>
      </Tabs>

      <TabScreen>
        {activeTab === 0 && (
          <VideosList
            videos={videos?.slice(0, 4)}
            onSelectVideo={onSelectVideo}
          />
        )}
        {activeTab === 1 && (
          <VideosList
            videos={videos?.slice(4, 8)}
            onSelectVideo={onSelectVideo}
          />
        )}
        {activeTab === 2 && (
          <VideosList
            videos={videos?.slice(8, 12)}
            onSelectVideo={onSelectVideo}
          />
        )}
      </TabScreen>
    </div>
  );
};
export default HealthTalksTabs;
