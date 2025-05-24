import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addComment, getComments } from "../actions/comments.actions";

export default function Form() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name && message) {
      const data = {
        name,
        message,
      };

      await dispatch(addComment(data));
      dispatch(getComments());
      setName("");
      setMessage("");
    }
  };

  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          placeholder="Votre nom"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <textarea
          placeholder="Votre commentaire"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <div className="form-group">
        <button type="submit">Envoyer</button>
      </div>
    </form>
  );
}
