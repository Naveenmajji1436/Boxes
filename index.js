const Box = (props) => {
  const { className, text } = props;
  return <p className={className}>{text}</p>;
};

const element = (
  <div class="mainContainer">
    <h1 className="heading">Boxes</h1>
    <div className="boxesContainer">
      <div className="sBoxContainer">
        <Box className="sBox" text="Small" />
      </div>

      <div className="mBoxContainer">
        <Box className="mBox" text="Medium" />
      </div>

      <div className="lBoxContainer">
        <Box className="lBox" text="Large" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
