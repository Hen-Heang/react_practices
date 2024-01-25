import React from 'react'

export default function ButtonPrimary(props) {
    console.log(props);
  return <div>
        <button onClick={()=>{
            props.handleClick();
        }} className="btn">
             Button
        </button>
    </div>;
}

