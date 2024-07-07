import React from "react";
import type { SVGProps } from "react";

export function IconBlog(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}>
      <path
        fill="currentColor"
        d="M3 3v18h18V3zm15 15H6v-1h12zm0-2H6v-1h12zm0-4H6V6h12z"></path>
    </svg>
  );
}
