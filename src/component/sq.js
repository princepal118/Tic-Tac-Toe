import React from "react";
import { SquareComponent, Items } from "../style/SquareComponent";

function SquareComponent(props) {
  //   const classes = props.className;
  return (
    <Items
      //   className={classes + (props.state === "X")}
      onClick={() => props.onClick(props.index)}
    >
      {props.state}
    </Items>
  );
}
export default SquareComponent;
