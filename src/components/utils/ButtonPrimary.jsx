import React from "react";

export default function ButtonPrimary({title, handleClick, styleParent}) {
  const handleClickedChild = () => {
    handleClick();
  };
  return (
    <div>
      <button onClick={handleClickedChild} style={styleParent? styleParent:styles}>
    {title}
      </button>
    </div>
  );
}

const styles = {
    backgroundColor: "blue",
    width: "200px",
    height: "80px",
    fontSize: "10px",
    borderRadius: "10px"
   
}
