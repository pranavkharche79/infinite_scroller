import logo from "./logo.svg";
import "./App.css";
import InfiniteScroll from "./Components/InfiniteScroll";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import ScrollExample from "./Components/ScrollExample";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Components/Loading";
import Loadindforallcomponents from "./Components/Loadindforallcomponents";

function App() {
  const [loading, setloading] = useState(false);
  useEffect(() => {
    //request interceptor
    axios.interceptors.request.use(
      (config) => {
        setloading(true);
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    //response interceptor
    axios.interceptors.response.use(
      (config) => {
        console.log("Innnnnnnnnnnnnnnnn The Responseeeeeeeeeee");
        setloading(false);
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }, []);

  return (
    <>
      <BrowserRouter>
        <Loading show={loading} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ScrollExample" element={<ScrollExample />} />
          <Route path="/allloaders" element={<InfiniteScroll />} />
          <Route path="/axiosloading" element={<Loadindforallcomponents />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
