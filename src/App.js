import React from "react";
import { useState, useEffect } from "react";
import Posts from "./components/Posts";
import Pagination from "./components/Pagination";
import "./App.css";

// on component mount, fetch posts
const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

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

  // this will get the "current" posts
  // remember that slice creates a shallow copy
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // change the page - pageNumber is passed by the pagination component
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3">Latest Posts</h1>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
};

export default App;
