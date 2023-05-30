export const IconeSVG = (props) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
    aria-label={props.altText}
    style={{
      height: props.height,
      margin: props.margin,
    }}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d={props.path}
      />
    </svg>
  )
}

// Icones retirados do portal https://heroicons.com/