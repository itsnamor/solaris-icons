import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M2 2h20"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M4 2h16v10.27c0 1.34 0 2.009-.268 2.6-.268.59-.773 1.03-1.781 1.912l-2 1.749C14.068 20.177 13.127 21 12 21s-2.068-.823-3.951-2.47l-2-1.748C5.04 15.9 4.536 15.46 4.269 14.87 4 14.28 4 13.61 4 12.27z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M8.5 13h7m-7-5h7"
      />
    </>
  ),
  bold: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2 1.25a.75.75 0 0 0 0 1.5h2v9.527c0 1.34 0 2.01.268 2.601s.772 1.032 1.781 1.915l2 1.75c1.883 1.647 2.824 2.47 3.951 2.47s2.069-.823 3.951-2.47l2-1.75c1.008-.883 1.513-1.324 1.78-1.915.269-.59.269-1.26.269-2.6V2.75h2a.75.75 0 0 0 0-1.5zm6.5 11a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5zM7.75 8a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7A.75.75 0 0 1 7.75 8"
      clipRule="evenodd"
    />
  ),
  broken: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.5"
      d="M2 2h20M8.049 18.53C9.932 20.178 10.873 21 12 21s2.069-.823 3.951-2.47l2-1.748c1.008-.882 1.513-1.322 1.78-1.913.269-.59.269-1.26.269-2.599V9.702M20 6V2H4v10.27c0 1.34 0 2.009.268 2.6.175.385.451.707.903 1.13M8.5 13h7m-7-5h7"
    />
  ),
  outline: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M1.25 2A.75.75 0 0 1 2 1.25h20a.75.75 0 0 1 0 1.5h-1.25v9.676c0 1.187.001 2.013-.335 2.753-.337.74-.958 1.284-1.852 2.065l-.118.103-2.038 1.782c-.91.795-1.645 1.438-2.296 1.876-.678.456-1.341.745-2.111.745s-1.433-.289-2.111-.745c-.651-.438-1.387-1.081-2.296-1.876l-2.038-1.782-.118-.103c-.894-.781-1.516-1.324-1.852-2.065s-.336-1.566-.335-2.753V2.75H2A.75.75 0 0 1 1.25 2m3.5.75v9.52c0 1.407.016 1.88.201 2.289.185.408.532.732 1.592 1.659l2 1.748c.956.836 1.62 1.416 2.184 1.794.545.367.915.49 1.273.49s.728-.122 1.274-.49c.563-.378 1.227-.958 2.183-1.794l2-1.748c1.06-.927 1.407-1.25 1.592-1.659.185-.408.201-.882.201-2.289V2.75zm3 5.25a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7A.75.75 0 0 1 7.75 8m0 5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.25 3A.75.75 0 0 1 2 2.25h20a.75.75 0 0 1 0 1.5H2A.75.75 0 0 1 1.25 3"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M4 3.75v9.527c0 1.34 0 2.01.268 2.601s.772 1.032 1.781 1.915l2 1.75c1.883 1.647 2.824 2.47 3.951 2.47s2.069-.823 3.951-2.47l2-1.75c1.008-.883 1.513-1.324 1.78-1.915.269-.59.269-1.26.269-2.6V3.75z"
        opacity=".5"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.75 14a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75m0-5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7A.75.75 0 0 1 7.75 9"
        clipRule="evenodd"
      />
    </>
  ),
  "line-duotone": (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M2 2h20"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M4 2h16v10.277c0 1.34 0 2.01-.268 2.601s-.773 1.032-1.781 1.915l-2 1.75c-1.883 1.647-2.824 2.47-3.951 2.47s-2.068-.823-3.951-2.47l-2-1.75c-1.009-.883-1.513-1.324-1.78-1.915C4 14.288 4 13.618 4 12.278z"
        opacity=".5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M8.5 13h7m-7-5h7"
      />
    </>
  ),
};

export function BillListLine({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

BillListLine.displayName = "IconBillListLine";

export const IconBillListLine = BillListLine;
export const BillListLineIcon = BillListLine;
