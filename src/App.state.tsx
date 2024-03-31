import { PropsWithChildren, createContext, useReducer } from "react";
import { AppAction, AppState, IAppContext } from "./App.types";

export const initialState: AppState = {
  selectedVideo: null,
  playlist: [],
};

export const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case "SET_SELECTED_VIDEO":
      return { ...state, selectedVideo: action.data };
    case "SET_UPDATED_PLAYLIST":
      return { ...state, playlist: action.data };
    default:
      return state;
  }
};

export const withProvider = (Component: () => JSX.Element) => {
  return () => {
    return (
      <AppProvider>
        <Component />
      </AppProvider>
    );
  };
};

export const AppContext = createContext<IAppContext | null>(null);

export const AppProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
