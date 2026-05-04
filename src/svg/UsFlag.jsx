const UsFlag = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={16.7153996101}
      fill="none"
      viewBox="0 0 513 343"
      {...props}
    >
      <g clipPath="url(#a)" filter="url(#b)">
        <path fill="#fff" d="M4 .957h513v342H4v-342Z" />
        <path
          fill="#D80027"
          d="M4 .957h513v26.3H4V.957Zm0 52.6h513v26.3H4v-26.3Zm0 52.6h513v26.3H4v-26.3Zm0 52.6h513v26.3H4v-26.3Zm0 52.7h513v26.3H4v-26.3Zm0 52.6h513v26.3H4v-26.3Zm0 52.6h513v26.3H4v-26.3Z"
        />
        <path fill="#2E52B2" d="M4 .957h256.5v184.1H4V.957Z" />
        <path
          fill="#fff"
          d="m51.8 139.857-4-12.8-4.4 12.8H30.2l10.7 7.7-4 12.8 10.9-7.9 10.6 7.9-4.1-12.8 10.9-7.7H51.8Zm56.3 0-4.1-12.8-4.2 12.8H86.6l10.7 7.7-4 12.8 10.7-7.9 10.8 7.9-4-12.8 10.7-7.7h-13.4Zm56.5 0-4.3-12.8-4 12.8h-13.5l11 7.7-4.2 12.8 10.7-7.9 11 7.9-4.2-12.8 10.7-7.7h-13.2Zm56.2 0-4-12.8-4.2 12.8h-13.3l10.8 7.7-4 12.8 10.7-7.9 10.8 7.9-4.3-12.8 11-7.7h-13.5ZM104 76.257l-4.2 12.8H86.6l10.7 7.9-4 12.6 10.7-7.8 10.8 7.8-4-12.6 10.7-7.9h-13.4l-4.1-12.8Zm-56.2 0-4.4 12.8H30.2l10.7 7.9-4 12.6 10.9-7.8 10.6 7.8-4.1-12.6 10.9-7.9H51.8l-4-12.8Zm112.5 0-4 12.8h-13.5l11 7.9-4.2 12.6 10.7-7.8 11 7.8-4.2-12.6 10.7-7.9h-13.2l-4.3-12.8Zm56.5 0-4.2 12.8h-13.3l10.8 7.9-4 12.6 10.7-7.8 10.8 7.8-4.3-12.6 11-7.9h-13.5l-4-12.8Zm-169-50.6-4.4 12.6H30.2l10.7 7.9-4 12.7 10.9-7.9 10.6 7.9-4.1-12.7 10.9-7.9H51.8l-4-12.6Zm56.2 0-4.2 12.6H86.6l10.7 7.9-4 12.7 10.7-7.9 10.8 7.9-4-12.7 10.7-7.9h-13.4l-4.1-12.6Zm56.3 0-4 12.6h-13.5l11 7.9-4.2 12.7 10.7-7.9 11 7.9-4.2-12.7 10.7-7.9h-13.2l-4.3-12.6Zm56.5 0-4.2 12.6h-13.3l10.8 7.9-4 12.7 10.7-7.9 10.8 7.9-4.3-12.7 11-7.9h-13.5l-4-12.6Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M4 .957h513v342H4z" />
        </clipPath>
        <filter
          id="b"
          width={521}
          height={350}
          x={0}
          y={0.957}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_301_131"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="effect1_dropShadow_301_131"
            result="effect2_dropShadow_301_131"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_301_131"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default UsFlag;
