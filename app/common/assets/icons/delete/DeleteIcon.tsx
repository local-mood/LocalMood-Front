import { IconProps } from "../icon-type";

export default function DeleteIcon({ className, onClick }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      onClick={onClick}
    >
      <path
        d="M1.71436 6H22.2858"
        stroke="#9E9E9E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.28589 6H19.7145V21.4286C19.7145 21.8832 19.5338 22.3193 19.2123 22.6407C18.8909 22.9622 18.4548 23.1429 18.0002 23.1429H6.00017C5.54551 23.1429 5.10948 22.9622 4.78799 22.6407C4.46651 22.3193 4.28589 21.8832 4.28589 21.4286V6Z"
        stroke="#9E9E9E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.71436 6.00003V5.14289C7.71436 4.00625 8.16588 2.91615 8.96961 2.11243C9.77333 1.30871 10.8634 0.857178 12.0001 0.857178C13.1367 0.857178 14.2268 1.30871 15.0305 2.11243C15.8343 2.91615 16.2858 4.00625 16.2858 5.14289V6.00003"
        stroke="#9E9E9E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.42871 11.1454V18.0052"
        stroke="#9E9E9E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.5715 11.1454V18.0052"
        stroke="#9E9E9E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
