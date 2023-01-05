// import Spinner from "react-bootstrap/Spinner";

const SpinnerW = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        paddingLeft: 350,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgb(32, 34, 34)",
      }}
    >
      {/* <Spinner animation="border">
        <span className="visually-hidden">Loading...</span>
      </Spinner> */}

      <div
        style={{
          width: 80,
          height: 80,
          border: "5px solid #fff",
          borderRadius: "50%",
          borderLeft: "none",
          borderTop: "none",
          animation: "spin",
          animationDuration: "500ms",
          animationIterationCount: "infinite",
        }}
      ></div>
    </div>
  );
};
export default SpinnerW;
