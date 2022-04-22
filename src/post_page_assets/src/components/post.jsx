import React, { useEffect, useState } from "react";
import Comment from "./comment";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import AddComment from "./AddComment";
import { post_page } from "../../../declarations/post_page";
import cryptoRandomString from 'crypto-random-string';


export default function Post() {
    const [post, setPost] = useState({
        user: "Victor Almeida",
        moment: "30 min atrás",
        title: "Mais um projeto!",
        text: <p>Esse projeto é apenas uma demo de uma seção de postagem, na qual um usuário poderá postar sobre seu dia e outros usuários poderão comentar. <strong>IMPORTANTE: Nenhum famoso conhecido citado nos comentários abaixo fizeram parte desse projeto. Seus nomes foram apenas citados para fins demostrativos.</strong> Os comentários são postados aleatoriamente. Caso atualize a página, há chances de serem outros comentários. <br /> Tenha um bom dia!! 😉</p>,
    });
    const [listComments, setListComments] = useState([]);
    const [liked, setLiked] = useState(false);
    const [likesNumber, setLikes] = useState(post.likes ? likes : Math.floor(Math.random() * 50 * 10));

    useEffect(() => {
        fetchData();
    }, [] );

    async function fetchData(){
        let commentsArray = await post_page.readComments();
        setListComments(commentsArray);
    }

    function randomNumber() {
        return Math.floor(Math.random() * 100 + 1);
    }

    function likeButtonClicked() {
        !liked ? setLikes(likesNumber + 1) : setLikes(likesNumber - 1);
        setLiked(value => {
            return !value
        });
    }

    function newComment(fields) {
        if (fields.user.length > 0 && fields.content.length > 0) {
            let instant = new Date();
            let comment = {
                id: cryptoRandomString({length: 10}),
                user: fields.user,
                content: fields.content,
                moment: `${instant.getDate()}/${instant.getMonth()}/${instant.getFullYear()}`,
                likes: 0,
                isArtificial: false
            }
            setListComments(
                prevComments => {

                    post_page.newComment(
                        comment.id,
                        comment.user,
                        comment.content,
                        comment.moment,
                        comment.likes,
                        comment.isArtificial
                    );

                    return ([comment,...prevComments]);
                }
            );
        } else { alert("Preencha os campos para poder comentar"); }
    }

    function deleteComment(id) {
        setListComments(currentComments => {
            return currentComments.filter((comment) => {
                return comment.id !== id;
            });
        });

        post_page.deleteComment(id);
    }

    return (
        <>
            <div className="post">
                <div className="top">
                    <h2 className="user">{post.user}</h2>
                    <h2 className="moment">{post.moment}</h2>
                </div>
                <div className="body">
                    <h3 className="title">{post.title}</h3>
                    <p className="text">{post.text}</p>
                    <div className="bottom">

                        <button
                            onClick={likeButtonClicked}>
                            <span>
                                {!liked?<ThumbUpIcon />:<ThumbUpIcon style={{color: "#0075B7"}}/>}
                            </span>
                        </button>
                        <p>{likesNumber}</p>

                    </div>
                </div>
            </div>

            <AddComment clickFunction={newComment} />

            <div className="comments">
                {
                    listComments.map((comment) =>
                        <Comment
                            key={comment.id}
                            id={comment.id}
                            user={comment.user}
                            moment={comment.moment}
                            text={comment.content}
                            likes={
                                comment.likes || parseInt(comment.likes) === 0 ? 
                                parseInt(comment.likes) 
                                : 
                                randomNumber}
                            isArtificial={comment.isArtificial}
                            clickFunction={deleteComment}
                        />
                    )
                }
            </div>
        </>
    );
}