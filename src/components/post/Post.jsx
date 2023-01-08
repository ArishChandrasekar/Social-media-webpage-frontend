import { FavoriteBorder, MoreVert, ThumbUpOffAlt } from "@mui/icons-material";
import React, { useState } from "react";
import "./post.css";
import { Users } from "../../data";

export default function Post({ post }) {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
    //style = color = !isLiked ? "tomato" : "";
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
              alt=""
              className="postProfileImg"
            />
            <span className="postUserName">
              {Users.filter((u) => u.id === post.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert className="moreIcon" />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img src={post.photo} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <FavoriteBorder
              className="likeIcon"
              onClick={likeHandler}
              style={{ color: isLiked ? "tomato" : "" }}
            />
            <ThumbUpOffAlt
              src="assets/like.png"
              alt=""
              onClick={likeHandler}
              style={{ color: isLiked ? "tomato" : "" }}
              className="likeIcon"
            />

            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
