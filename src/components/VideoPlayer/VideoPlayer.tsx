import Artplayer from "artplayer";
import { useEffect, useRef } from "react";

const VideoPlayer: React.FC<any> = ({ option, getInstance, ...rest }) => {
  const artRef = useRef<unknown>();

  useEffect(() => {
    const art = new Artplayer({
      ...option,
      container: artRef.current,
    });

    if (getInstance && typeof getInstance === "function") {
      getInstance(art);
    }

    return () => {
      if (art && art.destroy) {
        art.destroy(false);
      }
    };
  }, [option]);

  return <div ref={artRef} {...rest}></div>;
};

export default VideoPlayer;
