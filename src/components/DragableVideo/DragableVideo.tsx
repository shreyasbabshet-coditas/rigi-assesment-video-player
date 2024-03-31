import styles from "./DragableVideo.module.scss";
import { DragableVideoProps } from "./DragableVideo.types";

const DragableVideo: React.FC<DragableVideoProps> = ({
  video,
  isSelected = false,
  ...props
}) => {
  return (
    <div
      className={[styles.videoBanner, isSelected ? styles.selected : ""].join(
        " "
      )}
      {...props}
    >
      <img className={styles.image} src={video.thumbnailSrc} alt="img" />
      <div className={styles.content}>
        <p className={styles.title}>{video.title}</p>
        <p className={styles.subtitle}>{video.subtitle}</p>
      </div>
    </div>
  );
};

export default DragableVideo;
