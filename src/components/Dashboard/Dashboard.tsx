import { useContext } from "react";
import PlayList from "../PlayList/PlayList.tsx";
import VideoPlayer from "../VideoPlayer/VideoPlayer.tsx";
import styles from "./Dashboard.module.scss";
import { VIDEO_PLAYER_OPTIONS } from "./constants.ts";
import { AppContext } from "../../App.state.tsx";

const Dashboard: React.FC = () => {
  const context = useContext(AppContext);

  if (!context) {
    return <h3>Page Unavailable</h3>;
  }

  const { state } = context;

  return (
    <div className={styles.container}>
      <div className={styles.playList}>
        <PlayList />
      </div>
      <div className={styles.player}>
        <VideoPlayer
          option={{
            ...VIDEO_PLAYER_OPTIONS,
            url: state?.selectedVideo?.videoSrc ?? "",
          }}
          style={{
            width: "700px",
            height: "500px",
            margin: "60px auto 0",
          }}
        />
      </div>
    </div>
  );
};

export default Dashboard;
