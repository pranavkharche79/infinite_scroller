import React from "react";
import "../App.css";
import { useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="App-header">
        <button
          class="p-3 mb-2 bg-success text-white"
          onClick={() => {
            navigate("/ScrollExample");
          }}
          type="button"
        >
          Example of Infinite Scroll
        </button>
        <br />
        <br />
        <button
          class="p-3 mb-2 bg-warning text-dark"
          onClick={() => {
            navigate("/axiosloading");
          }}
          type="button"
        >
          Loading with axios interceptors
        </button>
        <br />
        <br />
        <button
          class="p-3 mb-2 bg-info text-white"
          onClick={() => {
            navigate("/allloaders");
          }}
          type="button"
        >
          Loading Animations
        </button>
      </div>
    </>
  );
}
