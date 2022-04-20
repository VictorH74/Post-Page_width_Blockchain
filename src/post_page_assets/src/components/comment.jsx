import React, { useState } from "react";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import DeleteIcon from '@material-ui/icons/Delete';

export default function Comment(props) {
    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(props.likes);
    const [isMouseOver, setIsMouseOver] = useState(false);

    function likeButtonClicked() {
        setLiked(value => {
            return !value
        });
        !liked ? setLikes(likes + 1) : setLikes(likes - 1);
    }

    function handleMouseOver() {
        setIsMouseOver(true);
    }

    function handleMouseOut() {
        setIsMouseOver(false);
    }

    function deleteComment(event) {
        event.target.parentNode.parentNode.parentNode.parentNode.style.animation = "takeOut 1s both ease-in-out";

        setTimeout(() => {
            props.clickFunction(props.id);
        }, 700);
        setIsMouseOver(false);
    }

    return (
        <div className="comment" 
            style={{
                animation: !props.isArtificial ? "newComment ease-in-out 170ms ": ""
                }}>
            <div className="top">
                <h2 className="user">{props.user}</h2>
                <h2 className="moment">{props.moment}</h2>
            </div>
            <div className="body">
                <p className="text">{props.text}</p>
                <div className="bottom">
                    <button onClick={likeButtonClicked}>
                        <span>
                        {!liked?<ThumbUpIcon />:<ThumbUpIcon style={{color: "#0075B7"}}/>}
                        </span>
                    </button>
                    <p>{likes}</p>
                    {!props.isArtificial ?
                        <button
                            onClick={deleteComment}
                            onMouseOver={handleMouseOver}
                            onMouseOut={handleMouseOut}
                            className="delete-btn">
                            {!isMouseOver ? <DeleteOutlineIcon /> : <DeleteIcon />}
                        </button> : ""}
                </div>
            </div>
        </div>
    );
}