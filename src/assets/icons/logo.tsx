import { SVGProps } from "react";

const LogoIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M0 4.95575L11.6129 0V34.6903L0 40V4.95575Z" fill="black"/>
        <path d="M28.3872 4.95575L40.0001 0V34.6903L28.3872 40V4.95575Z" fill="black"/>
        <path d="M25.8065 4.95575L14.1936 0V34.6903L25.8065 40V4.95575Z" fill="black"/>
    </svg>
)

export default LogoIcon;