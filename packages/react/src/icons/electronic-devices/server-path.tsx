import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M22 19h-8M2 19h8m2-2v-3"
      />
      <circle cx="12" cy="19" r="2" stroke="currentColor" strokeWidth="1.5" />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M2 11a3 3 0 0 1 3-3h14a3 3 0 1 1 0 6H5a3 3 0 0 1-3-3Zm0-6a3 3 0 0 1 3-3h14a3 3 0 1 1 0 6H5a3 3 0 0 1-3-3Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M13 5h6m-6 6h6"
      />
      <circle cx="6" cy="5" r="1" fill="currentColor" />
      <circle cx="6" cy="11" r="1" fill="currentColor" />
    </>
  ),
  bold: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M22 18.21a.685.685 0 0 0-.698-.67h-7.577a1.83 1.83 0 0 0-1.027-.989v-2.814h5.814c1.54 0 2.79-1.202 2.79-2.684s-1.25-2.685-2.79-2.685c1.54 0 2.79-1.201 2.79-2.684 0-1.482-1.25-2.684-2.79-2.684H5.488c-1.54 0-2.79 1.202-2.79 2.684s1.25 2.684 2.79 2.684c-1.54 0-2.79 1.202-2.79 2.685 0 1.482 1.25 2.684 2.79 2.684h5.814v2.814c-.466.182-.838.54-1.027.989H2.698c-.386 0-.698.3-.698.67s.312.672.698.672h7.577A1.86 1.86 0 0 0 12 20c.78 0 1.45-.463 1.725-1.118h7.577c.386 0 .698-.3.698-.672M12.233 5.685c0-.37.312-.67.697-.67h5.582c.385 0 .697.3.697.67s-.312.671-.697.671H12.93a.685.685 0 0 1-.697-.67m0 5.369c0-.371.312-.671.697-.671h5.582c.385 0 .697.3.697.67s-.312.672-.697.672H12.93a.685.685 0 0 1-.697-.671M6.419 6.579c.513 0 .93-.4.93-.895 0-.494-.417-.895-.93-.895s-.93.401-.93.895.416.895.93.895m0 5.368c.513 0 .93-.4.93-.894 0-.495-.417-.895-.93-.895s-.93.4-.93.895c0 .494.416.894.93.894"
      clipRule="evenodd"
    />
  ),
  broken: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M22 19h-8M2 19h8m2-2v-3"
      />
      <circle cx="12" cy="19" r="2" stroke="currentColor" strokeWidth="1.5" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M14 14H5a3 3 0 1 1 0-6h14a3 3 0 1 1 0 6h-1M12 2h7a3 3 0 1 1 0 6H5a3 3 0 0 1 0-6h3m5 3h6m-6 6h6"
      />
      <circle cx="6" cy="5" r="1" fill="currentColor" />
      <circle cx="6" cy="11" r="1" fill="currentColor" />
    </>
  ),
  outline: (
    <>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.25 5A3.75 3.75 0 0 1 5 1.25h14A3.75 3.75 0 0 1 21.25 8 3.75 3.75 0 0 1 19 14.75h-6.25v1.604c.916.259 1.637.98 1.896 1.896H22a.75.75 0 0 1 0 1.5h-7.353a2.751 2.751 0 0 1-5.293 0H2a.75.75 0 0 1 0-1.5h7.354a2.76 2.76 0 0 1 1.896-1.896V14.75H5A3.75 3.75 0 0 1 2.75 8a3.74 3.74 0 0 1-1.5-3M5 7.25a2.25 2.25 0 0 1 0-4.5h14a2.25 2.25 0 0 1 0 4.5zm14 1.5H5a2.25 2.25 0 0 0 0 4.5h14a2.25 2.25 0 0 0 0-4.5M12.25 5a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75m0 6a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75M12 17.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0m0 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
      />
    </>
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.302 13.737h7.21c1.54 0 2.79-1.202 2.79-2.684s-1.25-2.685-2.79-2.685c1.54 0 2.79-1.201 2.79-2.684 0-1.482-1.25-2.684-2.79-2.684H5.488c-1.54 0-2.79 1.202-2.79 2.684s1.25 2.684 2.79 2.684c-1.54 0-2.79 1.202-2.79 2.685 0 1.482 1.25 2.684 2.79 2.684zm1.628-8.724c-.385 0-.697.3-.697.671 0 .37.312.671.697.671h5.582c.385 0 .697-.3.697-.67a.685.685 0 0 0-.697-.672zm0 5.369c-.385 0-.697.3-.697.67s.312.672.697.672h5.582c.385 0 .697-.3.697-.671a.685.685 0 0 0-.697-.671zM7.35 5.684c0 .494-.417.895-.93.895s-.93-.4-.93-.895c0-.494.416-.895.93-.895.513 0 .93.401.93.895m0 5.369c0 .494-.417.894-.93.894s-.93-.4-.93-.894c0-.495.416-.895.93-.895.513 0 .93.4.93.895"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M22 18.211a.685.685 0 0 0-.698-.671h-7.577a1.83 1.83 0 0 0-1.027-.988v-2.815h-1.396v2.815c-.466.181-.838.54-1.027.988H2.698c-.386 0-.698.3-.698.671 0 .37.312.671.698.671h7.577A1.86 1.86 0 0 0 12 20c.78 0 1.45-.462 1.725-1.118h7.577c.386 0 .698-.3.698-.671"
        opacity=".6"
      />
    </>
  ),
  "line-duotone": (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M22 19h-8M2 19h8m2-2v-3"
        opacity=".5"
      />
      <circle cx="12" cy="19" r="2" stroke="currentColor" strokeWidth="1.5" />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M2 11a3 3 0 0 1 3-3h14a3 3 0 1 1 0 6H5a3 3 0 0 1-3-3Zm0-6a3 3 0 0 1 3-3h14a3 3 0 1 1 0 6H5a3 3 0 0 1-3-3Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M13 5h6m-6 6h6"
        opacity=".5"
      />
      <circle cx="6" cy="5" r="1" fill="currentColor" opacity=".5" />
      <circle cx="6" cy="11" r="1" fill="currentColor" opacity=".5" />
    </>
  ),
};

function ServerPath({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

ServerPath.displayName = "IconServerPath";

export const IconServerPath = ServerPath;
export const ServerPathIcon = ServerPath;
