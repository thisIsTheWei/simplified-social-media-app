import React, {useState} from 'react';
import UpvoteDownvote from "./UpvoteDownvote";
import '../Styles/Post.css';
import Comment from '../Comment/Comment';

const Post = ({ post, addComment }) => {
  const [commentText, setCommentText] = useState('');

  const handleAddComment = (e) => {
    e.preventDefault();
    addComment(post.id, { id: `comment-${post.id}-${Date.now()}`, text: commentText, votes: 0, replies: [] });
    setCommentText('');
  };

  const addReply = (parentId, reply) => {
    addComment(parentId, reply);
  };

  return (
    <div className="post">
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <UpvoteDownvote item={post} />
      <form onSubmit={handleAddComment}>
        <input
          type="text"
          placeholder="Add a comment"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
        <button type="submit">Comment</button>
      </form>
      {post.comments && post.comments.map(comment => (
        <Comment key={comment.id} comment={comment} addReply={addReply} />
      ))}
    </div>
  );
};

export default Post;