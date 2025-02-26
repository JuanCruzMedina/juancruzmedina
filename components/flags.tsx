import * as React from "react";

import { IconSvgProps } from "@/types";

export const ArgentinaFlag: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      id="flag-icons-ar"
      viewBox="0 0 640 480"
      width={size || width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      // xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <path d="M0 0h640v480H0z" fill="#74acdf" />
      <path d="M0 160h640v160H0z" fill="#fff" />
      <g id="ar-c" transform="translate(-64)scale(.96)">
        <path
          d="m396.8 251.3 28.5 62s.5 1.2 1.3.9c.8-.4.3-1.6.3-1.6l-23.7-64m-.7 24.2c-.4 9.4 5.4 14.6 4.7 23s3.8 13.2 5 16.5c1 3.3-1.2 5.2-.3 5.7 1 .5 3-2.1 2.4-6.8s-4.2-6-3.4-16.3-4.2-12.7-3-22"
          fill="#f6b40e"
          id="ar-a"
          stroke="#85340a"
          strokeWidth="1.1"
        />
        <use
          height="100%"
          transform="rotate(22.5 400 250)"
          width="100%"
          xlinkHref="#ar-a"
        />
        <use
          height="100%"
          transform="rotate(45 400 250)"
          width="100%"
          xlinkHref="#ar-a"
        />
        <use
          height="100%"
          transform="rotate(67.5 400 250)"
          width="100%"
          xlinkHref="#ar-a"
        />
        <path
          d="M404.3 274.4c.5 9 5.6 13 4.6 21.3 2.2-6.5-3.1-11.6-2.8-21.2m-7.7-23.8 19.5 42.6-16.3-43.9"
          fill="#85340a"
          id="ar-b"
        />
        <use
          height="100%"
          transform="rotate(22.5 400 250)"
          width="100%"
          xlinkHref="#ar-b"
        />
        <use
          height="100%"
          transform="rotate(45 400 250)"
          width="100%"
          xlinkHref="#ar-b"
        />
        <use
          height="100%"
          transform="rotate(67.5 400 250)"
          width="100%"
          xlinkHref="#ar-b"
        />
      </g>
      <use
        height="100%"
        transform="rotate(90 320 240)"
        width="100%"
        xlinkHref="#ar-c"
      />
      <use
        height="100%"
        transform="rotate(180 320 240)"
        width="100%"
        xlinkHref="#ar-c"
      />
      <use
        height="100%"
        transform="rotate(-90 320 240)"
        width="100%"
        xlinkHref="#ar-c"
      />
      <circle
        cx="320"
        cy="240"
        fill="#f6b40e"
        r="26.7"
        stroke="#85340a"
        strokeWidth="1.4"
      />
      <path
        d="M329 234.3c-1.7 0-3.5.8-4.5 2.4 2 1.9 6.6 2 9.7-.2a7 7 0 0 0-5.1-2.2zm0 .4c1.8 0 3.5.8 3.7 1.6-2 2.3-5.3 2-7.4.4q1.6-2 3.8-2z"
        fill="#843511"
        id="ar-h"
        strokeWidth="1"
      />
      <use
        height="100%"
        transform="matrix(-1 0 0 1 640.2 0)"
        width="100%"
        xlinkHref="#ar-d"
      />
      <use
        height="100%"
        transform="matrix(-1 0 0 1 640.2 0)"
        width="100%"
        xlinkHref="#ar-e"
      />
      <use
        height="100%"
        transform="translate(18.1)"
        width="100%"
        xlinkHref="#ar-f"
      />
      <use
        height="100%"
        transform="matrix(-1 0 0 1 640.2 0)"
        width="100%"
        xlinkHref="#ar-g"
      />
      <path
        d="M316 243.7a1.8 1.8 0 1 0 1.8 2.9 4 4 0 0 0 2.2.6h.2q1 0 2.3-.6.5.7 1.5.7a1.8 1.8 0 0 0 .3-3.6q.8.3.8 1.2a1.2 1.2 0 0 1-2.4 0 3 3 0 0 1-2.6 1.7 3 3 0 0 1-2.5-1.7q-.1 1.1-1.3 1.2-1-.1-1.2-1.2c-.2-1.1.3-1 .8-1.2zm2 5.4c-2.1 0-3 2-4.8 3.1 1-.4 1.8-1.2 3.3-2s2.6.2 3.5.2 2-1 3.5-.2q2 1.3 3.3 2c-1.9-1.2-2.7-3-4.8-3q-.7 0-2 .6z"
        fill="#85340a"
      />
      <path
        d="M317.2 251.6q-1.1 0-3.4.6c3.7-.8 4.5.5 6.2.5 1.6 0 2.5-1.3 6.1-.5-4-1.2-4.9-.4-6.1-.4-.8 0-1.4-.3-2.8-.2"
        fill="#85340a"
      />
      <path
        d="M314 252.2h-.8c4.3.5 2.3 3 6.8 3s2.5-2.5 6.8-3c-4.5-.4-3.1 2.3-6.8 2.3-3.5 0-2.4-2.3-6-2.3"
        fill="#85340a"
      />
      <path
        d="M323.7 258.9a3.7 3.7 0 0 0-7.4 0 3.8 3.8 0 0 1 7.4 0"
        fill="#85340a"
      />
      <path
        d="M303.4 234.3c4.7-4.1 10.7-4.8 14-1.7a8 8 0 0 1 1.5 3.4q.6 3.6-2.1 7.5l.8.4q2.4-4.7 1.6-9.4l-.6-2.3c-4.5-3.7-10.7-4-15.2 2z"
        fill="#85340a"
        id="ar-e"
        strokeWidth="1"
      />
      <path
        d="M310.8 233c2.7 0 3.3.6 4.5 1.7 1.2 1 1.9.8 2 1 .3.2 0 .8-.3.6q-.7-.2-2.5-1.6c-1.8-1.4-2.5-1-3.7-1-3.7 0-5.7 3-6.1 2.8-.5-.2 2-3.5 6.1-3.5"
        fill="#85340a"
        id="ar-d"
        strokeWidth="1"
      />
      <use
        height="100%"
        transform="translate(-18.4)"
        width="100%"
        xlinkHref="#ar-h"
      />
      <circle
        cx="310.9"
        cy="236.3"
        fill="#85340a"
        id="ar-f"
        r="1.8"
        strokeWidth="1"
      />
      <path
        d="M305.9 237.5c3.5 2.7 7 2.5 9 1.3 2-1.3 2-1.7 1.6-1.7s-.8.4-2.4 1.3c-1.7.8-4.1.8-8.2-.9"
        fill="#85340a"
        id="ar-g"
        strokeWidth="1"
      />
    </svg>
  );
};

export const UnitedStatesFlag: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      width={size || width}
      {...props}
      id="flag-icons-us"
      viewBox="0 0 640 480"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0h640v480H0" fill="#bd3d44" />
      <path
        d="M0 55.3h640M0 129h640M0 203h640M0 277h640M0 351h640M0 425h640"
        stroke="#fff"
        strokeWidth="37"
      />
      <path d="M0 0h364.8v258.5H0" fill="#192f5d" />
      <marker id="us-a" markerHeight="30" markerWidth="30">
        <path d="m14 0 9 27L0 10h28L5 27z" fill="#fff" />
      </marker>
      <path
        d="m0 0 16 11h61 61 61 61 60L47 37h61 61 60 61L16 63h61 61 61 61 60L47 89h61 61 60 61L16 115h61 61 61 61 60L47 141h61 61 60 61L16 166h61 61 61 61 60L47 192h61 61 60 61L16 218h61 61 61 61 60z"
        fill="none"
        markerMid="url(#us-a)"
      />
    </svg>
  );
};
