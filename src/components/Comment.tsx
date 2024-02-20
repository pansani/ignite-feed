/** @format */
import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";
import { useState } from "react";

interface CommentProps {
  content: string;
  deleteComment: (comment: string) => void;
}

export default function Comment({ content, deleteComment }: CommentProps) {
  const [likeCount, setLikecount] = useState(0);

  const handleDeleteComment = () => {
    deleteComment(content);
  };

  const handleLikeComment = () => {
    setLikecount(likeCount + 1);
  };

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/pansani.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Joao Claudio</strong>
              <time
                title="17 de fevereiro as 16:20"
                dateTime="2024-02-17 16:20:00"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar Comentario">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
