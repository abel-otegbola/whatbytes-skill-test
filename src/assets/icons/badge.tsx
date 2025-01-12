import { SVGProps } from "react";

const BadgeIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg width="18" height="31" viewBox="0 0 18 31" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M9.16968 17.6775L14.0834 16.3491V29.0228C13.874 28.7684 13.6421 28.5003 13.3917 28.2317C12.8298 27.6289 12.1603 27.007 11.4316 26.532C10.7085 26.0606 9.87549 25.6999 9.00004 25.6999C8.12459 25.6999 7.29156 26.0606 6.56851 26.532C5.83979 27.007 5.17024 27.6289 4.60836 28.2317C4.358 28.5003 4.12605 28.7684 3.91672 29.0228V16.3491L8.8304 17.6775L9.00004 17.7233L9.16968 17.6775Z" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M16.95 9.29993C16.95 14.126 13.3437 17.9499 9 17.9499C4.6563 17.9499 1.05002 14.126 1.05002 9.29993C1.05002 4.47388 4.6563 0.65 9 0.65C13.3437 0.65 16.95 4.47388 16.95 9.29993Z" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M11.2166 9.29969C11.2166 10.7016 10.1772 11.7497 8.99996 11.7497C7.82269 11.7497 6.7833 10.7016 6.7833 9.29969C6.7833 7.89777 7.82269 6.84971 8.99996 6.84971C10.1772 6.84971 11.2166 7.89777 11.2166 9.29969Z" fill="currentColor" stroke="currentColor" strokeWidth="1.3"/>
    </svg>
)

export default BadgeIcon;