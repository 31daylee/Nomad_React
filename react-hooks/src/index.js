import { elementType } from "prop-types";
import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

const useFullscreen = (callback) => {
  const element = useRef();
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
      if (callback && typeof callback === "function") {
        callback();
      }
    }
  };
  const exitFull = () => {
    document.exitFullscreen();
    if (callback && typeof callback === "function") {
      callback(false);
    }
  };
  return { element, triggerFull, exitFull };
};
const App = () => {
  const onFullS = (isFull) => {
    console.log(isFull ? "We are full " : "We are small");
  };
  const { element, triggerFull, exitFull } = useFullscreen();
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <div ref={element}>
        <img
          ref={element}
          src="https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_863/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/v6bwf3e8qhdfhrgq7lv3/%EB%91%90%EB%B0%94%EC%9D%B4IMG%EC%9B%94%EB%93%9C%EC%98%A4%EB%B8%8C%EC%96%B4%EB%93%9C%EB%B2%A4%EC%B2%98%ED%8B%B0%EC%BC%93.jpg"
        />
        <button onClick={exitFull}>Exit fullscreen</button>
      </div>
      <button onClick={triggerFull}>Make fullscreen</button>
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
