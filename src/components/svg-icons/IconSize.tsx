import React from "react";
import type { SVGProps } from "react";

export function IconSize(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      {...props}>
      <path
        fill="currentColor"
        d="M0 7h16v2H0zm7-1h2V3h2L8 0L5 3h2zm2 4H7v3H5l3 3l3-3H9z"></path>
    </svg>
  );
}
