import React from "react";
// import '../vendor/marzipano'
// import '../vendor/bowser.min'
// import '../vendor/screenfull.min'
import './data'
// import './index'

const NhaTho = () => {
  return (
    <div classNameName="multiple-scenes ">
      <div id="pano"></div>

      <div id="sceneList">
        <ul classNameName="scenes">
          <p classNameName="scene" data-id="0-nhathoconga01">
            <li classNameName="text">NhaThoConGa01</li>
          </p>

          <a href="javascript:void(0)" className="scene" data-id="1-nhathoconga02">
            <li className="text">NhaThoConGa02</li>
          </a>
        </ul>
      </div>

      <div id="titleBar">
        <h1 className="sceneName"></h1>
      </div>

      <a href="javascript:void(0)" id="autorotateToggle">
        <img className="icon off" src="../assets/img/play.png" />
        <img className="icon on" src="img/pause.png" />
      </a>

      <a href="javascript:void(0)" id="fullscreenToggle">
        <img className="icon off" src="img/fullscreen.png" />
        <img className="icon on" src="img/windowed.png" />
      </a>

      <a href="javascript:void(0)" id="sceneListToggle">
        <img className="icon off" src="img/expand.png" />
        <img className="icon on" src="img/collapse.png" />
      </a>

      <a
        href="javascript:void(0)"
        id="viewUp"
        className="viewControlButton viewControlButton-1"
      >
        <img className="icon" src="img/up.png" />
      </a>
      <a
        href="javascript:void(0)"
        id="viewDown"
        className="viewControlButton viewControlButton-2"
      >
        <img className="icon" src="img/down.png" />
      </a>
      <a
        href="javascript:void(0)"
        id="viewLeft"
        className="viewControlButton viewControlButton-3"
      >
        <img className="icon" src="img/left.png" />
      </a>
      <a
        href="javascript:void(0)"
        id="viewRight"
        className="viewControlButton viewControlButton-4"
      >
        <img className="icon" src="img/right.png" />
      </a>
      <a
        href="javascript:void(0)"
        id="viewIn"
        className="viewControlButton viewControlButton-5"
      >
        <img className="icon" src="img/plus.png" />
      </a>
      <a
        href="javascript:void(0)"
        id="viewOut"
        className="viewControlButton viewControlButton-6"
      >
        <img className="icon" src="img/minus.png" />
      </a>
    </div>
  );
};

export default NhaTho;
