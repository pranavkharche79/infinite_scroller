import logo from "./logo.svg";
import "./App.css";
import InfiniteScroll from "./Components/InfiniteScroll";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import ScrollExample from "./Components/ScrollExample";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ScrollExample" element={<ScrollExample />} />
          <Route path="/allloaders" element={<InfiniteScroll />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
