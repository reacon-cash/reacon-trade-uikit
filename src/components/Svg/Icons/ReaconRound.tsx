import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 90 90" {...props}>
      <circle cx="45" cy="45" r="45" fill="#3b5060" />
      <path
        d="M26.83,65.26a.91.91,0,0,0-.35-.12,4.46,4.46,0,0,1-3-2.74,4.85,4.85,0,0,1-.27-1.89,14.5,14.5,0,0,1,.43-2.69c.45-2.15.89-4.3,1.34-6.45.57-2.68,1.13-5.37,1.69-8q1-4.51,1.9-9c.26-1.27.5-2.55.86-3.8a7.76,7.76,0,0,1,2.26-3.75,7.67,7.67,0,0,1,4-1.88,11.62,11.62,0,0,1,1.67-.11H60.43c.76,0,1.52,0,2.27.06a4.08,4.08,0,0,1,3.68,2.6,4.94,4.94,0,0,1,.38,2.91c-.18,1-.41,2-.62,3l-1.62,7.75-2,9.39c-.45,2.11-.88,4.23-1.33,6.34A31.25,31.25,0,0,1,60.46,60a7.6,7.6,0,0,1-4.73,5l-.83.29H50.07a.39.39,0,0,0,0-.26c-.13-.57-.25-1.14-.39-1.7a22.11,22.11,0,0,0-2.88-6.74,20.55,20.55,0,0,0-5.28-5.44,17.23,17.23,0,0,0-10.65-3.38s-.11,0-.13,0a1.16,1.16,0,0,0,.35.18c.57.26,1.14.51,1.69.81A16.13,16.13,0,0,1,40,56.38a13.45,13.45,0,0,1,1.26,5.14A14.19,14.19,0,0,1,41.2,64a9.81,9.81,0,0,1-.22,1.3Zm16.92-18.8A6.14,6.14,0,1,0,50,40.31,6.15,6.15,0,0,0,43.75,46.46Z"
        transform="translate(0 0)"
        fill="#f04848"
      />
    </Svg>
  );
};

export default Icon;