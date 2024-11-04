import { useSettings } from "@/context/SettingContext"
import useWindowDimensions from "@/hooks/useWindowDimensions"

function GitHubCorner() {
    const { showGitHubCorner } = useSettings()
    const { width } = useWindowDimensions()

    return (
        <a
            href="https://docs.google.com/document/d/1aRbM5q3E14JCdtn6Ao6zrAW-7rFiNCAQ/edit?usp=drive_link&ouid=100964786605067152952&rtpof=true&sd=true"
            className="github-corner"
            aria-label="View source on GitHub"
            target="_blank"
            rel="noreferrer"
            style={{
                display: showGitHubCorner && width > 640 ? "block" : "none",
            }}
        >
            <svg
                width="150"
                height="100"
                viewBox="0 0 250 250"
                className="absolute right-0 top-0 z-10 border-none bg-primary text-gray-900 dark:text-gray-100"
                aria-hidden="true"
                style={{
                    color: "#151513",
                    transform: "rotate(45deg) translate(12%,-80%) scale(0.8)",
                }}
            >
               <g style={{ transform: "rotate(-45deg) translate(0%,50%)", transformOrigin: "bottom" }}>
                <rect x="30" y="10" width="100" height="140" rx="8" ry="8" fill="currentColor" />
                <line x1="30" y1="40" x2="130" y2="40" stroke="#ffffff" strokeWidth="2" />
                <line x1="30" y1="60" x2="130" y2="60" stroke="#ffffff" strokeWidth="2" />
                <line x1="30" y1="80" x2="130" y2="80" stroke="#ffffff" strokeWidth="2" />
                <line x1="30" y1="100" x2="130" y2="100" stroke="#ffffff" strokeWidth="2" />
                <line x1="30" y1="120" x2="130" y2="120" stroke="#ffffff" strokeWidth="2" />
                <path d="M115,10 C115,5 120,5 120,10 L120,150 C120,155 115,155 115,150 Z" fill="#ffffff" />
            </g>

            </svg>
        </a>
    )
}

export default GitHubCorner
