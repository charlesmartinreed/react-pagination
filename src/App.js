import React from "react";
import { useState, useEffect } from "react";
import "./App.css";

// on component mount, fetch posts
const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);

      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const newPosts = await res.json();
      setPosts(newPosts);

      setLoading(false);
    };

    fetchPosts();
  }, []);

  console.log(posts);
  return (
    <div className="container">
      <h1>Nothing much to see here... yet</h1>
    </div>
  );
};

export default App;
