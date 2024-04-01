import React, { useState, useEffect, useRef } from "react";
import "@/app/globals.css";
// Interface for BMI prop with type checking
interface BmiArcProps {
  bmi: number;
}

const BmiArc: React.FC<BmiArcProps> = ({ bmi }) => {
  useEffect(() => {
    const newAngle = (180 * (bmi - 13)) / (43 - 13);
    setAngle(newAngle);
  }, [bmi]); // Re-run effect when bmi changes
  const [angle, setAngle] = useState(0);
  return (
    <div className="pt-[10px] text-center">
      {bmi > 13 && bmi < 43 && (
        <svg
          key={bmi}
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="300px"
          height="163px"
          viewBox="0 0 300 163"
        >
          <g transform="translate(18,18)" className="text-[12px]">
            <defs>
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="7"
                refX="0"
                refY="3.5"
                orient="auto"
              >
                <polygon points="0 0, 10 3.5, 0 7"></polygon>
              </marker>
              <path
                id="curvetxt1"
                d="M-4 140 A140 140, 0, 0, 1, 284 140"
                className="fill-none"
              ></path>
              <path
                id="curvetxt2"
                d="M33 43.6 A140 140, 0, 0, 1, 280 140"
                className="fill-none"
              ></path>
              <path
                id="curvetxt3"
                d="M95 3 A140 140, 0, 0, 1, 284 140"
                className="fill-none"
              ></path>
              <path
                id="curvetxt4"
                d="M235.4 33 A140 140, 0, 0, 1, 284 140"
                className="fill-none"
              ></path>
            </defs>
            <path
              d="M0 140 A140 140, 0, 0, 1, 6.9 96.7 L140 140 Z"
              fill="#bc2020"
            ></path>
            <path
              d="M6.9 96.7 A140 140, 0, 0, 1, 12.1 83.1 L140 140 Z"
              fill="#d38888"
            ></path>
            <path
              d="M12.1 83.1 A140 140, 0, 0, 1, 22.6 63.8 L140 140 Z"
              fill="#ffe400"
            ></path>
            <path
              d="M22.6 63.8 A140 140, 0, 0, 1, 96.7 6.9 L140 140 Z"
              fill="#008137"
            ></path>
            <path
              d="M96.7 6.9 A140 140, 0, 0, 1, 169.1 3.1 L140 140 Z"
              fill="#ffe400"
            ></path>
            <path
              d="M169.1 3.1 A140 140, 0, 0, 1, 233.7 36 L140 140 Z"
              fill="#d38888"
            ></path>
            <path
              d="M233.7 36 A140 140, 0, 0, 1, 273.1 96.7 L140 140 Z"
              fill="#bc2020"
            ></path>
            <path
              d="M273.1 96.7 A140 140, 0, 0, 1, 280 140 L140 140 Z"
              fill="#8a0101"
            ></path>
            <path
              d="M45 140 A90 90, 0, 0, 1, 230 140 Z"
              className="fill-muted"
            ></path>
            <circle cx="140" cy="140" r="5" fill="#666"></circle>
            <g className="paint-order-stroke stroke-foreground stroke-1 ">
              <text
                x="25"
                y="111"
                transform="rotate(-72, 25, 111)"
                className="font-normal"
              >
                16
              </text>
              <text x="30" y="96" transform="rotate(-66, 30, 96)">
                17
              </text>
              <text x="35" y="83" transform="rotate(-57, 35, 83)">
                18.5
              </text>
              <text x="97" y="29" transform="rotate(-18, 97, 29)">
                25
              </text>
              <text x="157" y="20" transform="rotate(12, 157, 20)">
                30
              </text>
              <text x="214" y="45" transform="rotate(42, 214, 45)">
                35
              </text>
              <text x="252" y="95" transform="rotate(72, 252, 95)">
                40
              </text>
            </g>
            <g className="text-[14px]">
              <text>
                <textPath xlinkHref="#curvetxt1" className="fill-foreground">
                  Underweight
                </textPath>
              </text>
              <text>
                <textPath xlinkHref="#curvetxt2" className="fill-foreground">
                  Normal
                </textPath>
              </text>
              <text>
                <textPath xlinkHref="#curvetxt3" className="fill-foreground">
                  Overweight
                </textPath>
              </text>
              <text>
                <textPath xlinkHref="#curvetxt4" className="fill-foreground">
                  Obesity
                </textPath>
              </text>
            </g>
            <line
              x1="140"
              y1="140"
              x2="65"
              y2="140"
              stroke="#000"
              strokeWidth="2"
              markerEnd="url(#arrowhead)"
              className="z-10"
            >
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                from="0 140 140"
                to={`${angle} 140 140`}
                dur="2s"
                fill="freeze"
                repeatCount="1"
              ></animateTransform>
            </line>
            <text
              x="67"
              y="120"
              className="text-[28px] font-bold fill-white -z-50"
            >
              BMI = {bmi}
            </text>
          </g>
        </svg>
      )}
    </div>
  );
};

export default BmiArc;
