import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  if (!song) {
    return <div>select song</div>;
  }
  return (
    <div>
      <h1>Song Details</h1>
      <p>Title : {song.title}</p>
      <p>Duration : {song.duration}</p>
    </div>
  );
};

const mapStateToProps = state => {
  // console.log(state);
  return { song: state.selectedsong };
};

export default connect(mapStateToProps)(SongDetail);
