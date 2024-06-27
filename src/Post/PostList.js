// Need to check the new code
import React, {useCallback, useEffect, useState} from 'react';
import CreatePost from "./CreatePost";
import Post from "./Post";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchPosts = useCallback(async (page) => {
    // Mock API call to fetch posts
    const newPosts = Array.from({ length: 10 }, (_, i) => ({
      id: `post-${page}-${i}-${Math.random()}`, // Use Math.random() for a unique ID
      title: `Post ${page}-${i}`,
      content: `Content for post ${page}-${i}`,
      votes: 0,
      comments: [],
    }));
    setPosts((prevPosts) => [...prevPosts, ...newPosts]);
    setHasMore(newPosts.length > 0);
  }, []);

  useEffect(() => {
    fetchPosts(page);
  }, [page, fetchPosts]);

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight && hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasMore]);

  const addPost = (post) => {
    setPosts([post, ...posts]);
  };

  const addComment = (parentId, comment) => {
    const addCommentRecursively = (comments) => {
      return comments.map(c => {
        if (c.id === parentId) {
          return { ...c, replies: [...c.replies, comment] };
        }
        return { ...c, replies: addCommentRecursively(c.replies) };
      });
    };

    setPosts(posts.map(post =>
      post.id === parentId ? { ...post, comments: [...post.comments, comment] } : { ...post, comments: addCommentRecursively(post.comments) }
    ));
  };

  return (
    <div>
      <CreatePost addPost={addPost} />
      {posts.map(post => (
        <Post key={post.id} post={post} addComment={addComment} />
      ))}
      {hasMore && <p>Loading more posts...</p>}
    </div>
  );
};

export default PostList;