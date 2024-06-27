import React, {useState} from 'react';

const UpvoteDownvote = ({item}) => {
  const [votes, setVotes] = useState(item.votes);
  const upVote = () => setVotes(votes + 1);
  const downVote = () => setVotes(votes - 1);

  return (
    <div className="Votes">
      <button onClick={upVote}>Upvote</button>
      <span>{votes}</span>
      <button onClick={downVote}>Downvote</button>
    </div>
  );
};

export default UpvoteDownvote;