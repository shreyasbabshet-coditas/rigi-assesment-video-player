import { IVideo } from "../VideoPlayer/VideoPlayer.types";

export type DivElementProps = JSX.IntrinsicElements['div'];

export interface DragableVideoProps extends DivElementProps {
    video: IVideo;
    isSelected: boolean;
} 
