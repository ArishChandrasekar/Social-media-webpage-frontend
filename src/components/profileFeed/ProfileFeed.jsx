import React from "react";
import { profileFeed } from "../../data";
import Post from "../post/Post";
import "./profileFeed.css";

export default function ProfileFeed() {
  return (
    <div className="profileFeed">
      <div className="profileFeedWrapper">
        {profileFeed.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}
