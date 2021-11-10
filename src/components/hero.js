import React from "react";

const HeroBannerComponent = () => (
  <svg viewBox="0 0 1920 863">
    <defs>
      <pattern
        id="a"
        preserveAspectRatio="xMidYMid slice"
        width="100%"
        height="100%"
        viewBox="0 0 1080 720"
      >
        <image width={1080} height={720} xlinkHref="/assets/Hero_Banner.png" />
      </pattern>
      <pattern
        id="b"
        preserveAspectRatio="xMidYMid slice"
        width="100%"
        height="100%"
        viewBox="0 0 400 267"
      >
        <image width={400} height={267} xlinkHref="./assets/Hero_Banner.png" />
      </pattern>
    </defs>
    <g className="a">
      <rect className="i" width={1920} height={863} />
      <rect className="j" x={0.5} y={0.5} width={1919} height={862} />
    </g>
    <g className="b" transform="translate(118 90)">
      <circle className="i" cx={150} cy={150} r={150} />
      <circle className="j" cx={150} cy={150} r={149.5} />
    </g>
    <text className="c" transform="translate(455 152)">
      <tspan x={0} y={0}>
        {"A Reader's Digest"}
      </tspan>
    </text>
    <text className="d" transform="translate(455 209)">
      <tspan x={0} y={0}>
        {"The World of"}
      </tspan>
    </text>
    <text className="e" transform="translate(455 258)">
      <tspan x={0} y={0}>
        {"Mushrooms "}
      </tspan>
      <tspan className="f" y={0}>
        {"\uD83C\uDF44"}
      </tspan>
      <tspan y={0} />
    </text>
    <g transform="translate(445 279)">
      <g className="g">
        <rect className="i" width={154} height={76} rx={38} />
        <rect className="j" x={0.5} y={0.5} width={153} height={75} rx={37.5} />
      </g>
      <text className="h" transform="translate(16 52)">
        <tspan x={0} y={0}>
          {"Sign Up"}
        </tspan>
      </text>
    </g>
  </svg>
);

export default HeroBannerComponent;
