import { SVGProps } from "react";

const SuccessIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <g filter="url(#filter0_ii_806_61)">
            <rect width="21" height="20" rx="4" fill="#5CE340"/>
            <line x1="4.38047" y1="9.2759" x2="7.88047" y2="15.7759" stroke="white" strokeWidth="2"/>
            <line x1="18.2657" y1="4.39319" x2="7.76571" y2="16.8932" stroke="white" strokeWidth="2"/>
        </g>
        <defs>
            <filter id="filter0_ii_806_61" x="0" y="0" width="23" height="22" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dx="4" dy="4"/>
                <feGaussianBlur stdDeviation="1"/>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"/>
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_806_61"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dx="2" dy="2"/>
                <feGaussianBlur stdDeviation="1"/>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
                <feBlend mode="normal" in2="effect1_innerShadow_806_61" result="effect2_innerShadow_806_61"/>
            </filter>
        </defs>
    </svg>
)

export default SuccessIcon;