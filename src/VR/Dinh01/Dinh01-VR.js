import React from 'react';
import '../vendor/reset.min.css';
import '../style.css';
import image1 from '../assets/images/image1.jpg';
import image2 from '../assets/images/image2.jpg';
import data from './data.js';
import './index';

export default function MarzipanoViewer() {
  return (
    <div>
      <div id="pano">
        <img src={image1} alt="Image 1" />
        <img src={image2} alt="Image 2" />
      </div>

      <div id="sceneList">
        <ul className="scenes">
          {data.scenes.map((scene, index) => (
            <a href="javascript:void(0)" className="scene" data-id={scene.id} key={index}>
              <li className="text">{scene.name}</li>
            </a>
          ))}
        </ul>
      </div>

      <div id="titleBar">
        <h1 className="sceneName"></h1>
      </div>

      <a href="javascript:void(0)" id="autorotateToggle">
        <img className="icon off" src="/public/assets//public/assets/imgplay.png" alt="Play" />
        <img className="icon on" src="/public/assets/imgpause.png" alt="Pause" />
      </a>

      <a href="javascript:void(0)" id="fullscreenToggle">
        <img className="icon off" src="/public/assets/imgfullscreen.png" alt="Fullscreen" />
        <img className="icon on" src="/public/assets/imgwindowed.png" alt="Windowed" />
      </a>

      <a href="javascript:void(0)" id="sceneListToggle">
        <img className="icon off" src="/public/assets/imgexpand.png" alt="Expand" />
        <img className="icon on" src="/public/assets/imgcollapse.png" alt="Collapse" />
      </a>

      <a href="javascript:void(0)" id="viewUp" className="viewControlButton viewControlButton-1">
        <img className="icon" src="/public/assets/imgup.png" alt="Up" />
      </a>
      <a href="javascript:void(0)" id="viewDown" className="viewControlButton viewControlButton-2">
        <img className="icon" src="/public/assets/imgdown.png" alt="Down" />
      </a>
      <a href="javascript:void(0)" id="viewLeft" className="viewControlButton viewControlButton-3">
        <img className="icon" src="/public/assets/imgleft.png" alt="Left" />
      </a>
      <a href="javascript:void(0)" id="viewRight" className="viewControlButton viewControlButton-4">
        <img className="icon" src="/public/assets/imgright.png" alt="Right" />
      </a>
      <a href="javascript:void(0)" id="viewIn" className="viewControlButton viewControlButton-5">
        <img className="icon" src="/public/assets/imgplus.png" alt="Zoom In" />
      </a>
      <a href="javascript:void(0)" id="viewOut" className="viewControlButton viewControlButton-6">
        <img className="icon" src="/public/assets/imgminus.png" alt="Zoom Out" />
      </a>
    </div>
  );
}
