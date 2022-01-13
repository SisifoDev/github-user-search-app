import * as React from "react";

const IconSearch = (props) => (
  <svg
    width={21}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.84 0C3.967 0 0 3.955 0 8.816c0 4.862 3.966 8.817 8.84 8.817a8.816 8.816 0 0 0 5.707-2.088l4.265 4.244a.723.723 0 0 0 1.025-.003.725.725 0 0 0-.002-1.024l-4.26-4.24a8.764 8.764 0 0 0 2.106-5.706c0-4.86-3.966-8.816-8.84-8.816Zm5.272 13.975a7.331 7.331 0 0 0 2.12-5.159c0-4.062-3.316-7.367-7.391-7.367-4.076 0-7.392 3.305-7.392 7.367 0 4.063 3.316 7.367 7.392 7.367a7.38 7.38 0 0 0 5.161-2.098.702.702 0 0 1 .11-.11Z"
      fill={props.color}
    />
  </svg>
);

export default IconSearch;