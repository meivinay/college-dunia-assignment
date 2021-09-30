import React, { useContext, useEffect, useRef, useState } from "react";
import "./App.css";
import CollegeCard from "./components/CollegeCard";
import college from "./Data/colleges.json";
function App() {
  const [allPosts, setPost] = useState([]);
  const [totalLength, setTotalLength] = useState(college.colleges.length);
  const [lastIndex, setLastIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [element, setElement] = useState(null);

  const observer = new IntersectionObserver(
    (entries) => {
      const first = entries[0];
      if (first.isIntersecting) {
        console.log("visible");
        setLoading(true);
      } else {
        console.log("not visible");
      }
    },
    { root: null, threshold: 1 }
  );

  useEffect(() => {
    const currentElement = element;
    const currentObserver = observer;

    if (currentElement) {
      console.log("started observing");
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        console.log("cleanUp");
        currentObserver.unobserve(currentElement);
      }
    };
  }, [element]);

  useEffect(() => {
    if (loading && totalLength) {
      console.log("loading");
      let posts = [...Array(10)].map((value, index) => {
        if (lastIndex + index < totalLength) {
          console.log(lastIndex + index);
          return <CollegeCard details={college.colleges[lastIndex + index]} />;
        }
      });
      if (posts.length) {
        setPost([...allPosts, posts]);
        setLastIndex(lastIndex + 10);
      }
      setLoading(false);
    }
  }, [loading]);

  useEffect(() => {
    console.log("loading", loading);
  }, [loading]);

  return (
    <>
      <div className="App">
        <div className="card-container">
          {allPosts.map((card) => card)}
          
      </div>
      <div>
      {loading && "loading"}
          {loading === false && lastIndex < totalLength && (
            <span ref={setElement}>.....Load More</span>
          )}
        </div>
    </div>
    </>
  );
}

export default App;
