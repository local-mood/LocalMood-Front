import { IconProps } from "../icon-type";

export default function MusicIcon({ color = "#8F73FD", className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className={className}
    >
      <path
        d="M10.2889 10.4064L17.0889 7.6864V12.2087C16.6847 11.95 16.2043 11.8 15.6889 11.8C14.2529 11.8 13.0889 12.9641 13.0889 14.4C13.0889 15.8359 14.2529 17 15.6889 17C17.1248 17 18.2889 15.8359 18.2889 14.4C18.2889 14.4 18.2889 14.4 18.2889 14.4L18.2889 6.757C18.2889 5.84273 18.2889 5.07597 18.2245 4.46505C18.2154 4.37871 18.2047 4.29287 18.1928 4.21278C18.1309 3.79541 18.0213 3.40605 17.81 3.08092C17.7043 2.91836 17.5731 2.77184 17.4097 2.64591C17.3791 2.6223 17.3473 2.59941 17.3144 2.57728L17.3077 2.57286C16.742 2.19632 16.1059 2.22325 15.4507 2.39021C14.817 2.55169 14.0314 2.88052 13.0681 3.28375L11.3928 3.98492C10.9413 4.1739 10.5587 4.33401 10.2584 4.49984C9.93896 4.67628 9.66376 4.88438 9.45738 5.19449C9.251 5.5046 9.16529 5.8388 9.12588 6.20164C9.08884 6.54265 9.08885 6.95737 9.08887 7.44686V13.8087C8.68475 13.55 8.20432 13.4 7.68887 13.4C6.25293 13.4 5.08887 14.5641 5.08887 16C5.08887 17.4359 6.25293 18.6 7.68887 18.6C9.12481 18.6 10.2889 17.4359 10.2889 16C10.2889 16 10.2889 16 10.2889 16L10.2889 10.4064Z"
        fill={color}
      />
      <path
        opacity="0.5"
        d="M6.28887 2.00039C6.28887 1.66902 6.02024 1.40039 5.68887 1.40039C5.3575 1.40039 5.08887 1.66902 5.08887 2.00039V6.60912C4.68475 6.35039 4.20432 6.20039 3.68887 6.20039C2.25293 6.20039 1.08887 7.36445 1.08887 8.80039C1.08887 10.2363 2.25293 11.4004 3.68887 11.4004C5.12481 11.4004 6.28887 10.2363 6.28887 8.80039V4.40399C6.84768 4.8077 7.5125 5.00039 8.08887 5.00039C8.42024 5.00039 8.68887 4.73176 8.68887 4.40039C8.68887 4.06902 8.42024 3.80039 8.08887 3.80039C7.72538 3.80039 7.26191 3.65951 6.89814 3.35908C6.55159 3.07287 6.28887 2.63867 6.28887 2.00039Z"
        fill={color}
      />
    </svg>
  );
}