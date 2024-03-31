import styles from "./PlayList.module.scss";
import { useContext, useEffect, useRef } from "react";
import { VIDEOS } from "./constants";
import { IVideo } from "../VideoPlayer/VideoPlayer.types";
import DragableVideo from "../DragableVideo/DragableVideo";
import { AppContext } from "../../App.state";

const PlayList: React.FC = () => {
  const dragItem = useRef<number | null>();
  const dragOverItem = useRef<number | null>();
  const context = useContext(AppContext);

  useEffect(() => {
    dispatch({
      type: "SET_UPDATED_PLAYLIST",
      data: VIDEOS,
    });
    dispatch({
      type: "SET_SELECTED_VIDEO",
      data: VIDEOS[0],
    });
  }, []);

  if (!context) {
    return <h3>Page Unavailable</h3>;
  }
  const { state, dispatch } = context;
  const { playlist } = state;
  const dragStart = (position: number) => {
    dragItem.current = position;
  };

  const dragEnd = (position: number) => {
    dragOverItem.current = position;
  };

  const drop = () => {
    const clonedList = [...playlist];
    const dragedInfo = clonedList[dragItem.current ?? 0];
    clonedList.splice(dragItem.current ?? 0, 1);
    clonedList.splice(dragOverItem.current ?? 0, 0, dragedInfo);
    dragItem.current = null;
    dragOverItem.current = null;
    console.log("log");
    dispatch({
      type: "SET_UPDATED_PLAYLIST",
      data: clonedList,
    });
  };

  const handleClick = (video: IVideo) => {
    dispatch({
      type: "SET_SELECTED_VIDEO",
      data: video,
    });
  };

  return (
    <div className={styles.main}>
      <h4 className={styles.headline}>Playlist</h4>
      <div className={styles.container}>
        {playlist?.map((video, index) => {
          return (
            <DragableVideo
              draggable
              key={`video-${video.id}`}
              video={video}
              isSelected={video.id === state.selectedVideo?.id}
              onClick={() => handleClick(video)}
              onDragStart={() => dragStart(index)}
              onDragEnter={() => dragEnd(index)}
              onDragEnd={drop}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PlayList;
