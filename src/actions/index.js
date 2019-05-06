// Action creator
export const SelectSong = song => {
  // action
  return {
    type: "SELECTED_SONG",
    payload: song
  };
};
