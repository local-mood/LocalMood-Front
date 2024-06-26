import { IconProps } from "../icon-type";

//Atom
export default function SearchIcon({ className, onClick }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className={className}
      onClick={onClick}
    >
      <g clipPath="url(#clip0_1139_154)">
        <path
          d="M8.57144 16.4286C12.9108 16.4286 16.4286 12.9108 16.4286 8.57142C16.4286 4.23204 12.9108 0.714279 8.57144 0.714279C4.23205 0.714279 0.714294 4.23204 0.714294 8.57142C0.714294 12.9108 4.23205 16.4286 8.57144 16.4286Z"
          stroke="#9E9E9E"
          strokeWidth="1.42857"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19.2857 19.2857L14.2857 14.2857"
          stroke="#9E9E9E"
          strokeWidth="1.42857"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1139_154">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
