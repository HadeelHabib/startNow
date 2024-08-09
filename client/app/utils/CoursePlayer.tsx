import React, { FC } from "react";
import { BsGooglePlay } from "react-icons/bs";
import ReactPlayer from "react-player/youtube";

type Props = {
  videoUrl: string;
  title: string;
  isDemo?: boolean;
};

const CoursePlayer: FC<Props> = ({ videoUrl, isDemo, title }) => {
  return (
    <ReactPlayer
      width={"100%"}
      height={isDemo ? "34vh" : "70vh"}
      url={`https://www.youtube.com/embed/${videoUrl}`}
      title={title}
      frameborder="0"
      controls
      playing
      light
      playIcon={<BsGooglePlay color="#1af21e" size={40} />}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media;
        gyroscope; picture-in-picture;"
      allowfullscreen
    ></ReactPlayer>
  );
};

export default CoursePlayer;
