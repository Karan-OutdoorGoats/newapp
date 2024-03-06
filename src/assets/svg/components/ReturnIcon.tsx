import * as React from "react"
import { SVGProps } from "react"
const ReturnIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    {...props}
  >
    <title>{"return"}</title>
    <path d="M0 21.984q.032-.8.608-1.376l4-4q.448-.48 1.056-.576t1.12.128.864.736.352 1.12V20h18.016q.8 0 1.408-.576T28 18.016v-8q0-.832-.576-1.408T26.016 8h-16q-.736 0-1.248-.416t-.64-.992 0-1.152.64-1.024T10.016 4h16q2.464 0 4.224 1.76T32 10.016v8q0 2.496-1.76 4.224T26.016 24H8v2.016q0 .64-.352 1.152t-.896.704-1.12.096-1.024-.544l-4-4q-.64-.608-.608-1.44z" />
  </svg>
)
export default ReturnIcon
