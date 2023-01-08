import React from "react";
import "./share.css";
import { EmojiEmotions, Label, PermMedia, Room } from "@mui/icons-material";

export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img src="/assets/myPic.jpg" alt="" className="shareProfileImg" />
          <input placeholder="Type whatever you think" className="shareInput" />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareoption">
              <PermMedia htmlColor="plum" className="shareIcon" />
              <span className="shareOptionText">Photo or Video</span>
            </div>
            <div className="shareoption">
              <Label htmlColor="blue" className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareoption">
              <Room htmlColor="red" className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareoption">
              <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}
