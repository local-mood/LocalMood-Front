import { IconProps } from "../icon-type";

//Atom
export default function AddLineIcon({ onClick, className }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">
      <g
        stroke="#667085"
        strokeLinecap="round"
        strokeLinejoin="round"
        clipPath="url(#a)"
        onClick={onClick}
        className={className}
      >
        <path d="M8 15.429A7.429 7.429 0 1 0 8 .57 7.429 7.429 0 0 0 8 15.43ZM8 4.571v6.858M4.572 8h6.857" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
