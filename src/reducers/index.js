import { combineReducers } from "redux";
// combineReducers is a predefined named function of react-redux library
// It is use to combine two libraries to each other.

const SongsReducer = () => {
  return [
    { title: "Mercy fit | Badshah", duration: "3:24" },
    { title: "Daru pike nachna", duration: "2:04" },
    { title: "Slowly slowly", duration: "3:27" },
    { title: "Holly holly nach patloni", duration: "5:04" }
  ];
};

const SelectedSongReducer = (SelectedSong = null, action) => {
  if (action.type === "SELECTED_SONG") {
    return action.payload;
  }

  return SelectedSong;
};

export default combineReducers({
  songs: SongsReducer,
  selectedsong: SelectedSongReducer
});
