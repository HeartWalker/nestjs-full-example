import { isBrowser } from "@packages/common";
import React, { FC } from "react";
// import "../../static/css/normalize.css";
// import "../../static/css/button.css";
if(process.env.target === 'web'){
  require('../../static/css/normalize.css');
  require('../../static/css/button.css');
}

export const App1 = (props) => {
  return (
    <div>
      react app1 {props.date}
      <button
        onClick={() => {
          alert(1);
        }}
      >
        button
      </button>
    </div>
  );
};
