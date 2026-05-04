/* eslint-disable react/prop-types */
const ArrowUp = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={12} height={7} fill="none">
      <path
        stroke={props.fill ?? "black"}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m10.943 6.01-4.72-4.964-4.834 4.853"
      />
    </svg>
  );
};

export default ArrowUp;
