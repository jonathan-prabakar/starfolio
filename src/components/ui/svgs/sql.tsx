import type { SVGProps } from "react";

const SQL = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 256 256" preserveAspectRatio="xMidYMid">
    <path
      d="M128 0C57.308 0 0 28.66 0 64c0 35.34 57.308 64 128 64s128-28.66 128-64C256 28.66 198.692 0 128 0Z"
      fill="#E38C00"
    />
    <path
      d="M0 64v32c0 35.34 57.308 64 128 64s128-28.66 128-64V64c0 35.34-57.308 64-128 64S0 99.34 0 64Z"
      fill="#F5A623"
    />
    <path
      d="M0 96v32c0 35.34 57.308 64 128 64s128-28.66 128-64V96c0 35.34-57.308 64-128 64S0 131.34 0 96Z"
      fill="#FFC94D"
    />
    <path
      d="M0 128v32c0 35.34 57.308 64 128 64s128-28.66 128-64v-32c0 35.34-57.308 64-128 64S0 163.34 0 128Z"
      fill="#FFE08A"
    />
    <path
      d="M128 0v256C57.308 256 0 227.34 0 192V64c0-35.34 57.308-64 128-64Z"
      fill="#E38C00"
      opacity="0.15"
    />
  </svg>
);

export { SQL };
