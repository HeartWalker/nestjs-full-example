import React, { FC } from "react";

export const App1 = (props) => {
  return (
    <div>
      react app1 {props.date}
      <button
        onClick={() => {
          alert(1);
          console.log('=====')
        }}
      >
        button
      </button>
    </div>
  );
};
