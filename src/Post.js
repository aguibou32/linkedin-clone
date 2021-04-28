import { Avatar } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import CommentIcon from "@material-ui/icons/Comment";
import ShareIcon from "@material-ui/icons/Share";
import SendIcon from "@material-ui/icons/Send";
import React from "react";
import InputOption from "./InputOption";
import "./Post.css";
function Post({ name, description, message, photoUrl }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar src={photoUrl ? photoUrl : ""}>
          {name.charAt(0).toUpperCase()}
        </Avatar>
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="post__body">
        <p>{message}</p>
      </div>

      <div className="post__buttons">
        <InputOption Icon={ThumbUpIcon} title="like" color="gray" />
        <InputOption Icon={CommentIcon} title="comment" color="gray" />
        <InputOption Icon={ShareIcon} title="share" color="gray" />
        <InputOption Icon={SendIcon} title="send" color="gray" />
      </div>
    </div>
  );
}

export default Post;
