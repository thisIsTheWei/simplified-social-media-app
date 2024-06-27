// Need to check the new code
import React, {useState} from 'react';
import '../Styles/Comment.css'
import UpvoteDownvote from "../Post/UpvoteDownvote";

const Comment = ({ comment, addReply, level = 0 }) => {
  const [replyText, setReplyText] = useState('');

  const handleAddReply = (e) => {
    e.preventDefault();
    addReply(comment.id, { id: `reply-${comment.id}-${Date.now()}`, text: replyText, votes: 0, replies: [] });
    setReplyText('');
  };

  return (
    <div className="comment" style={{ marginLeft: `${level * 20}px` }}>
      <p>{comment.text}</p>
      <UpvoteDownvote item={comment} />
      <form onSubmit={handleAddReply}>
        <input
          type="text"
          placeholder="Reply"
          value={replyText}
          onChange={(e) => setReplyText(e.target.value)}
        />
        <button type="submit">Reply</button>
      </form>
      {comment.replies && comment.replies.map(reply => (
        <Comment key={reply.id} comment={reply} addReply={addReply} level={level + 1} />
      ))}
    </div>
  );
};

export default Comment;