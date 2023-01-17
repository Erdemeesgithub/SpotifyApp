const SpinnerL = () => {
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
        <div>Login please</div>
      </div>
    );
  };
  export default SpinnerL;
  