import React from "react";
import { useSelector } from "react-redux";

export default function Commenters() {
  const comments = useSelector((state) => state.commentsReducer);
  const isLoading = !comments;

  if (isLoading) {
    return (
      <div className="comments-container">
        <div className="loading">Chargement des commentaires...</div>
      </div>
    );
  }

  if (comments.length === 0) {
    return (
      <div className="comments-container">
        <div className="no-comments">Aucun commentaire pour le moment.</div>
      </div>
    );
  }

  // Trier les commentaires du plus récent au plus ancien
  const sortedComments = [...comments].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  return (
    <div className="comments-container">
      <h2>Commentaires ({comments.length})</h2>
      <div className="comments-list">
        {sortedComments.map((comment) => (
          <div key={comment._id} className="comment">
            <div className="comment-header">
              <span className="comment-author">{comment.name}</span>
              <span className="comment-date">
                {new Date(comment.createdAt).toLocaleDateString("fr-FR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </div>
            <div className="comment-content">{comment.message}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
