import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { RotatingLines } from "react-loader-spinner";

export default function Loadindforallcomponents() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const loaderRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Fetch initial data
    fetchData();

    // Initialize IntersectionObserver
    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: "20px",
      threshold: 0.5,
    });

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    // Clean up
    return () => observer.disconnect();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    setTimeout(async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
        );
        const data = await response.data;
        setPosts((prevPosts) => [...prevPosts, ...data]);
        setPage((prevPage) => prevPage + 1);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    }, 3000);
  };

  const handleObserver = (entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      fetchData();
    }
  };

  return (
    <div className="infinite-scroll-container">
      {posts.map((post, index) => (
        <div key={index} className="post">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <hr />
        </div>
      ))}
      <div ref={loaderRef}></div>
      {isLoading && (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "40px",
            }}
          >
            <RotatingLines
              strokeColor="black"
              strokeWidth="5"
              animationDuration="0.75"
              width="96"
              visible={true}
            />
          </div>
        </>
      )}
    </div>
  );
}
