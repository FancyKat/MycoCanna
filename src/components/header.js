import React from "react";

const Header = () => (
  <svg viewBox="0 0 1920 75">
    <g className="navigation-bar">
      <rect className="nav-wrapper" width={1920} height={75} />
      <rect className="nav-background" x={0.5} y={0.5} width={1919} height={74} />
    </g>
    <g transform="translate(968)">
      <rect className="nav-option" width={198} height={75} />
      <text className="nav-text" transform="translate(52 52)">
        <tspan x={0} y={0}>
          {"Home"}
        </tspan>
      </text>
    </g>
    <g transform="translate(1173)">
      <rect className="nav-option" width={198} height={75} />
      <text className="nav-text" transform="translate(55 52)">
        <tspan x={0} y={0}>
          {"About"}
        </tspan>
      </text>
    </g>
    <g transform="translate(1377)">
      <path className="nav-option" d="M0,0H198V75H0Z" />
      <text className="nav-text" transform="translate(38 52)">
        <tspan x={0} y={0}>
          {"Sign Up"}
        </tspan>
      </text>
    </g>
    <g transform="translate(1582)">
      <rect className="nav-option" width={198} height={75} />
      <text className="nav-text" transform="translate(56 52)">
        <tspan x={0} y={0}>
          {"Login"}
        </tspan>
      </text>
    </g>
    <text className="nav-text" transform="translate(140 52)">
      <tspan x={0} y={0}>
        {"Logo Here"}
      </tspan>
    </text>
  </svg>
);

export default Header;
