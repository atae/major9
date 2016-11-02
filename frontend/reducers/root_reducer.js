import { combineReducers } from "redux";
import sessionReducer from "./session_reducer";
import albumReducer from './album_reducer';
import trackReducer from './track_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  albums: albumReducer,
  tracks: trackReducer
});

export default rootReducer;
