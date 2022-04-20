import React, { useState } from "react";

export default function AddComment(props) {

    const [fields, setFields] = useState({
        user: "",
        content: ""
    });

    function updateInputCommentDatas(event) {
        var { name, value } = event.target;

        if(value.length > 1 && value[value.length - 2] === " " && name === "user"){
            value = value.slice(0, value.length - 1) + value.slice(value.length-1).toUpperCase();
        }

        // Characters limits
        value.length > 25 && name === "user"? value = value.slice(0, 25):
        value.length > 80 && name === "content"? value = value.slice(0, 80):

        setFields(currentValues => {
            return {
                ...currentValues,
                [name]: value.length === 1 ? value.toUpperCase(): value
            };
        });
    }

    function newComment(){
        props.clickFunction(fields);

        // reset fields
        setFields({
            user: "",
            content: ""
        });
    }

    return (
        <div className="add-comment" onKeyPress={event => event.key === "Enter" ? newComment() : null}>
            <form>
                <input onChange={updateInputCommentDatas} type="text" name="user" value={fields.user} placeholder="Usuário" />
                <input onChange={updateInputCommentDatas} type="text" name="content" value={fields.content} placeholder="Adicione um comentário..." />
            </form>
            <button
                onClick={newComment}
                className="btn-comment"
                disabled={fields.user.length === 0||fields.content.length === 0}
                style={
                    {
                        cursor: fields.user.length === 0
                            || fields.content.length === 0 ?
                            "no-drop" : "pointer",
                        backgroundColor: fields.user.length === 0
                            || fields.content.length === 0 ?
                            "#0074b72c" : "#0075B7",
                    }
                }
            >
                Comentar
            </button>

        </div>
    );
}