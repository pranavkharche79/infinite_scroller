import React from "react";
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
import {
  Audio,
  BallTriangle,
  Bars,
  Blocks,
  Circles,
  CirclesWithBar,
  ColorRing,
  Comment,
  DNA,
  Discuss,
  FallingLines,
  FidgetSpinner,
  Grid,
  Hearts,
  Hourglass,
  InfinitySpin,
  LineWave,
  MagnifyingGlass,
  MutatingDots,
  ProgressBar,
  Puff,
  Radio,
  RevolvingDot,
  Rings,
  RotatingSquare,
  RotatingTriangles,
  TailSpin,
  ThreeCircles,
  ThreeDots,
  Triangle,
  Vortex,
  Watch,
} from "react-loader-spinner";
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
  const loading = true;

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
        <div style={{ margin: "0 100px" }}></div>
        37
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#4fa94d"
          ariaLabel="ball-triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
        <div style={{ margin: "0 100px" }}></div>
        38
        <Bars
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
        <div style={{ margin: "0 100px" }}></div>
        39
        <Blocks
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          visible={true}
        />
      </div>
      <br />
      <br />
      <div style={{ display: "flex", justifyContent: "centre" }}>
        40
        <CirclesWithBar
          height="100"
          width="100"
          color="#4fa94d"
          outerCircleColor="#4fa94d"
          innerCircleColor="#4fa94d"
          barColor="#4fa94d"
          ariaLabel="circles-with-bar-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
        <div style={{ margin: "0 100px" }}></div>
        41
        <Circles
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
        <div style={{ margin: "0 100px" }}></div>
        42
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="color-ring-loading"
          wrapperStyle={{}}
          wrapperClass="color-ring-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
        <div style={{ margin: "0 100px" }}></div>
        43
        <Comment
          visible={true}
          height="80"
          width="80"
          ariaLabel="comment-loading"
          wrapperStyle={{}}
          wrapperClass="comment-wrapper"
          color="#fff"
          backgroundColor="#F4442E"
        />
        <div style={{ margin: "0 100px" }}></div>
        44
        <Discuss
          visible={true}
          height="80"
          width="80"
          ariaLabel="discuss-loading"
          wrapperStyle={{}}
          wrapperClass="discuss-wrapper"
          color="#fff"
          backgroundColor="#F4442E"
        />
      </div>
      <br />
      <br />
      <div style={{ display: "flex", justifyContent: "centre" }}>
        45
        <DNA
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
        <div style={{ margin: "0 100px" }}></div>
        46
        <FallingLines
          color="#4fa94d"
          width="100"
          visible={true}
          ariaLabel="falling-circles-loading"
        />
        <div style={{ margin: "0 100px" }}></div>
        47
        <FidgetSpinner
          visible={true}
          height="80"
          width="80"
          ariaLabel="fidget-spinner-loading"
          wrapperStyle={{}}
          wrapperClass="fidget-spinner-wrapper"
        />
        <div style={{ margin: "0 100px" }}></div>
        48
        <Grid
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="grid-loading"
          radius="12.5"
          wrapperStyle={{}}
          wrapperClass="grid-wrapper"
        />
        <div style={{ margin: "0 100px" }}></div>
        49
        <Hearts
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="hearts-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
      <br />
      <br />
      <div style={{ display: "flex", justifyContent: "centre" }}>
        50
        <Hourglass
          visible={true}
          height="80"
          width="80"
          ariaLabel="hourglass-loading"
          wrapperStyle={{}}
          wrapperClass=""
          colors={["#306cce", "#72a1ed"]}
        />
        <div style={{ margin: "0 100px" }}></div>
        51
        <InfinitySpin
          visible={true}
          width="200"
          color="#4fa94d"
          ariaLabel="infinity-spin-loading"
        />
        <div style={{ margin: "0 100px" }}></div>
        52
        <LineWave
          visible={true}
          height="100"
          width="100"
          color="#4fa94d"
          ariaLabel="line-wave-loading"
          wrapperStyle={{}}
          wrapperClass=""
          firstLineColor=""
          middleLineColor=""
          lastLineColor=""
        />
        <div style={{ margin: "0 100px" }}></div>
        53
        <MagnifyingGlass
          visible={true}
          height="80"
          width="80"
          ariaLabel="magnifying-glass-loading"
          wrapperStyle={{}}
          wrapperClass="magnifying-glass-wrapper"
          glassColor="#c0efff"
          color="#e15b64"
        />
        <div style={{ margin: "0 100px" }}></div>
        54
        <MutatingDots
          visible={true}
          height="100"
          width="100"
          color="#4fa94d"
          secondaryColor="#4fa94d"
          radius="12.5"
          ariaLabel="mutating-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
      <br />
      <br />
      <div style={{ display: "flex", justifyContent: "centre" }}>
        55
        <ProgressBar
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="progress-bar-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
        <div style={{ margin: "0 100px" }}></div>
        56
        <Puff
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="puff-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
        <div style={{ margin: "0 100px" }}></div>
        57
        <Radio
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="radio-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
        <div style={{ margin: "0 100px" }}></div>
        58
        <RevolvingDot
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="revolving-dot-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
        <div style={{ margin: "0 100px" }}></div>
        59
        <Rings
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="rings-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
      <br />
      <br />
      <div style={{ display: "flex", justifyContent: "centre" }}>
        60
        <RotatingLines
          visible={true}
          height="96"
          width="96"
          color="grey"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
        <div style={{ margin: "0 100px" }}></div>
        61
        <RotatingSquare
          visible={true}
          height="100"
          width="100"
          color="#4fa94d"
          ariaLabel="rotating-square-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
        <div style={{ margin: "0 100px" }}></div>
        62
        <RotatingTriangles
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="rotating-triangles-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
        <div style={{ margin: "0 100px" }}></div>
        63
        <TailSpin
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
        />
        <div style={{ margin: "0 100px" }}></div>
        64
        <ThreeCircles
          visible={true}
          height="100"
          width="100"
          color="#4fa94d"
          ariaLabel="three-circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
      <br />
      <br />
      <div style={{ display: "flex", justifyContent: "centre" }}>
        65
        <ThreeDots
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
        <div style={{ margin: "0 100px" }}></div>
        66
        <Triangle
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
        <div style={{ margin: "0 100px" }}></div>
        67
        <Vortex
          visible={true}
          height="80"
          width="80"
          ariaLabel="vortex-loading"
          wrapperStyle={{}}
          wrapperClass="vortex-wrapper"
          colors={["red", "green", "blue", "yellow", "orange", "purple"]}
        />
        <div style={{ margin: "0 100px" }}></div>
        68
        <Watch
          visible={true}
          height="80"
          width="80"
          radius="48"
          color="#4fa94d"
          ariaLabel="watch-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
        <div style={{ margin: "0 100px" }}></div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
