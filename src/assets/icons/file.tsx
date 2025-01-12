import { SVGProps } from "react";

const FileIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M16.25 6.25V18.75H3.75V1.25H11.25M16.25 6.25L11.25 1.25M16.25 6.25H11.25V1.25" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
)

export default FileIcon;