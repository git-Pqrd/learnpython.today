import * as React from "react";

export function GameLevel(props: { level: number }) {
  const disabled = "#454545";
  const enabledOne = "#49DC7E";
  const enabledTwo = "#3DC66F";
  const enabledThree = "#2DA858";
  const enabledFour = "#16813E";
  return (
    <div className="flex flex-row">
      <div className="text-2xl font-black self-end pr-3">Level</div>
      <svg
        className="py-2"
        width="50"
        height="40"
        viewBox="0 0 180 100"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="translate(-11.560501,-182.43617)">
          <rect
            x="11.560501"
            y="256.8149"
            width="40"
            height="120"
            fill={props.level >= 1 ? enabledOne : disabled}
          />
          <rect
            x="58.411609"
            y="232.44937"
            width="40"
            height="140"
            fill={props.level >= 2 ? enabledTwo : disabled}
          />
          <rect
            x="105.26272"
            y="195.10301"
            width="40"
            height="160"
            fill={props.level >= 3 ? enabledThree : disabled}
          />
          <rect
            x="152.30764"
            y="182.43617"
            width="40"
            height="180"
            fill={props.level >= 4 ? enabledFour : disabled}
          />
        </g>
      </svg>
    </div>
  );
}
