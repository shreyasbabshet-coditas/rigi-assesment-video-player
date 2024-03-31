import { IVideo } from "./components/VideoPlayer/VideoPlayer.types";

export interface AppState {
    selectedVideo: IVideo | null;
    playlist: IVideo[]
}

export interface AppAction {
    type: "SET_SELECTED_VIDEO" | "SET_UPDATED_PLAYLIST",
    data?: any
}

export interface IAppContext {
    state: AppState;
    dispatch: React.Dispatch<AppAction>;
}

