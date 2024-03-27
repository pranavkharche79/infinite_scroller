import React, { useState, useEffect, useRef } from "react";
// import DotLoader from "react-spinners";
import PacmanLoader from "react-spinners/PacmanLoader";
import {
  SpinnerDiamond,
  SpinnerInfinity,
  SpinnerCircular,
  SpinnerCircularFixed,
  SpinnerDotted,
} from "spinners-react";
import SyncLoader from "react-spinners/SyncLoader";
import ScaleLoader from "react-spinners/ScaleLoader";
import RotateLoader from "react-spinners/RotateLoader";
import RiseLoader from "react-spinners/RiseLoader";
import RingLoader from "react-spinners/RingLoader";
import PulseLoader from "react-spinners/PulseLoader";
import PuffLoader from "react-spinners/PuffLoader";
import BounceLoader from "react-spinners/BounceLoader";
import PropagateLoader from "react-spinners/PropagateLoader";
import MoonLoader from "react-spinners/MoonLoader";
import HashLoader from "react-spinners/HashLoader";
import FadeLoader from "react-spinners/FadeLoader";
import GridLoader from "react-spinners/GridLoader";
import ClockLoader from "react-spinners/ClockLoader";
import BeatLoader from "react-spinners/BeatLoader";
import DotLoader from "react-spinners/DotLoader";
import ClipLoader from "react-spinners/ClipLoader";
import CircleLoader from "react-spinners/CircleLoader";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { Audio } from "react-loader-spinner";
import { RotatingLines } from "react-loader-spinner";
import {
  PushSpinner,
  TraceSpinner,
  RainbowSpinner,
  RingSpinner,
  SwishSpinner,
  PongSpinner,
  MetroSpinner,
  JellyfishSpinner,
} from "react-spinners-kit";

export default function InfiniteScroll() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        1.
        <BeatLoader
          color="#36d7b7"
          speedMultiplier={1}
          style={{
            marginTop: "20px",
            marginBottom: "30px",
            fontSize: "20px",
          }}
        />
      </div>
      <br />
      <div style={{ display: "flex", justifyContent: "left" }}>
        2.
        <BounceLoader color="#36d7b7" />
        <div style={{ margin: "0 100px" }}></div>
        3.
        <CircleLoader color="#36d7b7" />
        <div style={{ margin: "0 100px" }}></div>
        4.
        <ClimbingBoxLoader color="#36d7b7" />
        <div style={{ margin: "0 100px" }}></div>
        5.
        <ClipLoader color="#36d7b7" />
        <div style={{ margin: "0 100px" }}></div>
        6.
        <ClockLoader color="#36d7b7" />
        <div style={{ margin: "0 100px" }}></div>
        7.
        <DotLoader color="#36d7b7" />
      </div>
      <br />
      <br />
      <div style={{ display: "flex", justifyContent: "left" }}>
        8.
        <GridLoader color="#36d7b7" />
        <div style={{ margin: "0 100px" }}></div>
        9.
        <HashLoader color="#36d7b7" />
        <div style={{ margin: "0 100px" }}></div>
        10.
        <MoonLoader color="#05efb1" size={70} speedMultiplier={0.5} />
        <div style={{ margin: "0 100px" }}></div>
        11.
        <PacmanLoader color="#36d7b7" />
        <div style={{ margin: "0 100px" }}></div>
        12.
        <PropagateLoader color="#36d7b7" />
        <div style={{ margin: "0 100px" }}></div>
        13.
        <PuffLoader color="#36d7b7" />
      </div>

      <br />
      <br />
      <div style={{ display: "flex", justifyContent: "left" }}>
        14.
        <PulseLoader color="#36d7b7" />
        <div style={{ margin: "0 100px" }}></div>
        15
        <FadeLoader color="#36d7b7" margin={5} />
        <div style={{ margin: "0 100px" }}></div>
        16
        <ClipLoader color="#36d7b7" />
        <div style={{ margin: "0 100px" }}></div>
        17
        <RingLoader color="#36d7b7" />
        <div style={{ margin: "0 100px" }}></div>
        18
        <RiseLoader color="#36d7b7" />
        <div style={{ margin: "0 100px" }}></div>
        19
        <RotateLoader color="#36d7b7" />
      </div>
      <br />
      <br />
      <div style={{ display: "flex", justifyContent: "left" }}>
        20
        <ScaleLoader color="#36d7b7" />
        <div style={{ margin: "0 100px" }}></div>
        21
        <SyncLoader color="#36d7b7" />
        <div style={{ margin: "0 100px" }}></div>
        22
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      </div>
      {/* some different loaders */}
      <div style={{ display: "flex", justifyContent: "left" }}>
        <div className="spinner">
          23
          <PushSpinner size={30} color="#00ff89" loading={loading} />
        </div>
        <div style={{ margin: "0 100px" }}></div>
        <div className="spinner">
          24
          <TraceSpinner
            size={40}
            frontColor="green"
            backColor="white"
            loading={loading}
          />
        </div>
        <div style={{ margin: "0 100px" }}></div>

        <div className="spinner">
          25
          <RainbowSpinner size={50} color="purple" loading={loading} />
        </div>
        <div style={{ margin: "0 100px" }}></div>
        <div className="spinner">
          26
          <RingSpinner size={50} color="yellow" loading={loading} />
        </div>
        <div style={{ margin: "0 100px" }}></div>
        <div className="spinner">
          27
          <SwishSpinner
            size={40}
            frontColor="blue"
            backColor="white"
            loading={loading}
          />
        </div>
        <div style={{ margin: "0 100px" }}></div>
        <div className="spinner">
          28
          <PongSpinner size={60} color="pink" loading={loading} />
        </div>
        <div style={{ margin: "0 100px" }}></div>
      </div>
      <br />
      <br />
      <div style={{ display: "flex", justifyContent: "left" }}>
        <div className="spinner">
          29
          <MetroSpinner size={40} color="yellow" loading={loading} />
        </div>
        <div style={{ margin: "0 100px" }}></div>
        <div className="spinner">
          30
          <JellyfishSpinner size={80} color="grey" loading={loading} />
        </div>
        <div style={{ margin: "0 100px" }}></div>
        31
        <SpinnerCircularFixed
          size={67}
          thickness={180}
          speed={85}
          color="rgba(57, 172, 125, 1)"
          secondaryColor="rgba(57, 172, 148, 0.36)"
        />
        <div style={{ margin: "0 100px" }}></div>
        32
        <SpinnerDotted
          size={67}
          thickness={180}
          speed={85}
          color="rgba(57, 172, 125, 1)"
        />
        <div style={{ margin: "0 100px" }}></div>
        33
        <SpinnerInfinity
          size={67}
          thickness={180}
          speed={85}
          color="rgba(57, 172, 125, 1)"
          secondaryColor="rgba(57, 172, 148, 0.36)"
        />
        <div style={{ margin: "0 100px" }}></div>
        34
        <SpinnerDiamond
          size={67}
          thickness={180}
          speed={85}
          color="rgba(57, 172, 125, 1)"
          secondaryColor="rgba(57, 172, 148, 0.36)"
        />
        <div style={{ margin: "0 100px" }}></div>
      </div>
      <br />
      <br />
      <div style={{ display: "flex", justifyContent: "centre" }}>
        35
        <Audio
          height="80"
          width="80"
          radius="1"
          color="green"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
          style={{ marginTop: "20px", fontSize: "20px" }}
        />
        <div style={{ margin: "0 100px" }}></div>
        36
        <SpinnerCircular size={70} thickness={180} speed={85} color="black" />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
